const bookData = [
    { id: 1, title: "어린 왕자", author: "생텍쥐페리" },
    { id: 2, title: "자바스크립트 완벽 가이드", author: "데이비드 플래너건" },
    { id: 3, title: "해리 포터와 마법사의 돌", author: "J.K. 롤링" }
];

const list = document.querySelector("#book-list-container");
show();
function show() {
    list.innerHTML = "";
    let li;

    for(i = 0; i < bookData.length; i++) {
        li = document.createElement("li");
        li.textContent = "id : " + bookData[i].id + " 제목 : " + bookData[i].title + " 작가 : " + bookData[i].author;
        list.appendChild(li);
    }
}

console.log("초기 데이터가 로드되었습니다:", bookData);  