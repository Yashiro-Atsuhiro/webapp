"use client";
import { useState, useEffect } from "react";

const DiaryList = () => {
  const [diaries, setDiaries] = useState<Array<{ title: string; content: string; date: string }>>([]);

  useEffect(() => {
    const savedDiaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    setDiaries(savedDiaries);
  }, []);


  const deleteDiary = (index: number) => {

    const updatedDiaries = diaries.filter((_, i) => i !== index);

    localStorage.setItem("diaries", JSON.stringify(updatedDiaries));


    setDiaries(updatedDiaries);
  };

  return (
    <div className="container mx-auto p-8 text-center max-w-2xl">
      <h1 className="text-3xl mb-4">日記一覧</h1>
  
      {diaries.length === 0 ? (
        <p>まだ日記がありません。</p>
      ) : (
        <div className="space-y-4">
          {diaries.map((diary, index) => (
            <details
              key={index}
              className="border rounded-lg p-4 bg-gray-100 w-full" // ここでw-fullを追加
            >
              <summary className="cursor-pointer text-lg font-bold">
                {diary.date} - {diary.title}
              </summary>
              <p className="mt-2">{diary.content}</p>
              <button
                onClick={() => deleteDiary(index)} // 削除ボタンのクリック時に deleteDiary を呼び出す
                className="bg-red-500 text-white p-2 rounded mt-4"
              >
                削除する
              </button>
            </details>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiaryList;
