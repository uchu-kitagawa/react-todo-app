import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/** mapの第2引数でindexを受け取れる */}
        {todos.map((todo, index) => {
          return (
            // ループの場合は一番親のタグにkeyを設定
            <li key={todo}>
              <div className="list-row">
                <p className="todoName">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
