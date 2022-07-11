import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

const deleteFromcompleteList = (deleteTarget) => {
  document.getElementById("complete-list").removeChild(deleteTarget);
};

const getNodeValueText = (nodes) => {
  let res = "";
  nodes.forEach((value) => {
    if (value.nodeType === Node.TEXT_NODE) {
      res += value.nodeValue;
    }
  });
  return res;
};

const addIncompleteList = (text) => {
  const li = document.createElement("li");
  li.className = "list-row";
  const div = document.createElement("div");
  div.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了リストに追加する
    const addTraget = completeButton.parentNode.parentNode;
    const text = getNodeValueText(addTraget.firstElementChild.childNodes);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    const completeDiv = document.createElement("div");
    completeDiv.innerText = text;
    backButton.addEventListener("click", () => {
      deleteFromcompleteList(completeLi);
      div.innerText = text;
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
      li.appendChild(div);
      document.getElementById("incomplete-list").appendChild(li);
    });

    completeDiv.appendChild(backButton);
    const completeLi = document.createElement("li");
    completeLi.appendChild(completeDiv);
    document.getElementById("complete-list").appendChild(completeLi);
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liの子要素にdivを入れる
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
