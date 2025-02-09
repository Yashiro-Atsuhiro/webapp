"use client"; 
import { useState } from "react";
import Link from "next/link";

const CreateDiary = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(""); // 日付の状態を追加

  const saveDiary = () => {
    if (!title.trim() || !content.trim() || !date.trim()) return;

    const newDiary = { title, content, date };

    const savedDiaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    const updatedDiaries = [...savedDiaries, newDiary];
    localStorage.setItem("diaries", JSON.stringify(updatedDiaries));
  };

  return (
    <>
      <div className="container mx-auto p-8 text-center max-w-2xl">
        <div className="flex justify-between mb-4">
          <Link href="/">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4">Todoアプリ</h1>
          </Link>
          <Link href="/diaryfile">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4">一日の振り返りをする</h1>
          </Link>
        </div>

        <div className="p-4 max-w-2xl m-auto">
          <h1 className="text-xl font-bold mb-4">今日の振り返り</h1>

          {/* 日付入力欄を追加 */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded w-full mb-4"
          />

          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded w-full mb-4"
          />

          <textarea
            placeholder="内容を書く..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border rounded w-full h-40 mb-4"
          ></textarea>

          <Link href="/">
            <button onClick={saveDiary} className="bg-blue-500 text-white p-2 rounded">
              保存する
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateDiary;
