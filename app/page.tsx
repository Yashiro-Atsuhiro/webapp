import TodoList from './todolist/Todolist';
import DiaryList from './diaryfile/diaryset'
import Link from 'next/link';


const Home = () => {
    return (
        <div className="container mx-auto p-8 text-center max-w-2xl">
             <div className='flex justify-between mb-4'>
            <Link href="/">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4">Todoアプリ</h1>
            </Link>
            <Link href="/diaryfile">
                <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4'>一日の振り返りをする</h1>
            </Link>
             </div>
            <TodoList />
            <DiaryList />
        </div>
    );
};

export default Home;