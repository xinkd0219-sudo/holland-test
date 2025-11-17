
const questionsData = [
 {q:"我喜欢修理或操作机械设备。", type:"R"},
 {q:"我喜欢观察、分析问题。", type:"I"},
 {q:"我喜欢创作、写作、绘画。", type:"A"},
 {q:"我喜欢帮助他人解决困难。", type:"S"},
 {q:"我喜欢组织活动、领导别人。", type:"E"},
 {q:"我喜欢做需要细心与准确的工作。", type:"C"},
];

window.onload = function() {
    let qDiv = document.getElementById("questions");
    questionsData.forEach((item, idx)=>{
        qDiv.innerHTML += `
            <div class="qBox">
                <p>${idx+1}. ${item.q}</p>
                <label><input type="radio" name="q${idx}" value="2"> 非常符合</label>
                <label><input type="radio" name="q${idx}" value="1"> 一般符合</label>
                <label><input type="radio" name="q${idx}" value="0"> 不符合</label>
            </div>
        `;
    });
}

function submitTest(){
    let scores = {R:0,I:0,A:0,S:0,E:0,C:0};
    for (let i=0;i<questionsData.length;i++){
        let v = document.querySelector(`input[name='q${i}']:checked`);
        if(!v){ alert("还有题目未作答"); return; }
        scores[questionsData[i].type] += parseInt(v.value);
    }

    let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
    let top = sorted[0][0];

    const advice = {
        R:"你的类型偏向【现实型】(R)：适合工程师、技工、建筑、制造、设备操作等职业。",
        I:"你的类型偏向【研究型】(I)：适合科学研究、数据分析、医学、程序开发等职业。",
        A:"你的类型偏向【艺术型】(A)：适合设计、写作、表演、创意策划、自媒体等职业。",
        S:"你的类型偏向【社会型】(S)：适合教师、咨询师、心理学、社工、人力资源等职业。",
        E:"你的类型偏向【企业型】(E)：适合销售、管理、创业、市场、运营等职业。",
        C:"你的类型偏向【常规型】(C)：适合行政、财务、文职、审计、资料管理等职业。",
    };

    document.getElementById("result").innerHTML =
        `<h2>测试结果：${top}</h2><p>${advice[top]}</p>`;
}
