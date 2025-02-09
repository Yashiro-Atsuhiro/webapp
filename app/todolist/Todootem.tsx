// 必要なライブラリをインポート
import React from 'react';

const TodoItem = (props: { task: string; toggleCompletion: () => void; }) => {
    return (
        <div className="flex justify-between p-2 border-b bg-gray mb-5">
            {/* テキスト表示 */}
            <span className="flex-1">{props.task}</span>
            {/* toggleCompletionのトリガー */}
            <button onClick={props.toggleCompletion} className="text-xl">
                ✔
            </button>
        </div>
    );
};

export default TodoItem;
