"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const TodoItem = (props: { task: string; completed: boolean; toggleCompletion: () => void; removeTask: () => void; }) => {
    return (
        <div className="flex justify-between items-center p-2 border-b bg-gray-100 mb-5">
            <span
                className={`flex-1 ${props.completed ? 'line-through text-gray-500' : ''}`}
                style={{
                    minWidth: '0', // 最小幅を設定してコンテンツが余分に広がらないようにする
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}
            >
                {props.task}
            </span>
            <div className="flex items-center">
                <button onClick={props.toggleCompletion} className="text-xl mr-2">
                    {props.completed ? '未完了' : '完了'}
                </button>
                <button onClick={props.removeTask} className="text-red-500 text-xl">
                    削除
                </button>
            </div>
        </div>
    );
};

const TodoList = () => {
    const [tasks, setTasks] = useState<Array<{ task: string; completed: boolean }>>([]);
    const [newTask, setNewTask] = useState('');

    // 初回レンダリング時にローカルストレージからタスクを取得
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []); // 初回のみ実行

    // タスクが変更されるたびにローカルストレージに保存
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    // 新しいタスクを追加
    const addTask = () => {
        if (newTask.trim()) {
            const updatedTasks = [...tasks, { task: newTask, completed: false }];
            setTasks(updatedTasks);
            setNewTask('');
        }
    };

    // タスクの完了状態をトグル
    const toggleCompletion = (index: number) => {
        const updatedTasks = tasks.map((task, idx) => 
            idx === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    // タスクを削除
    const removeTask = (index: number) => {
        const updatedTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                className="p-2 border rounded w-full mb-8"
            />
            <div>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task.task}
                        completed={task.completed}
                        toggleCompletion={() => toggleCompletion(index)}
                        removeTask={() => removeTask(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
