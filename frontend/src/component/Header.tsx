import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
    id: number;
    name: string;
}

interface HeaderProps {
    onCategoryChange: (categoryId: number) => void;
}
const Header: React.FC<HeaderProps> = ( {onCategoryChange} ) => {
    const [categories, setcategories] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectcategory, setselectcategory] = useState(1);
    useEffect(() => {
        setLoading(true);
        axios.get<Category[]>('http://localhost:8000/api/categories')
            .then(res => setcategories(res.data))
            .catch(err => console.error('lỗi khi lấy danh mục', err))
            .finally(() => setLoading(false));
    }, []);
    const categoryClick = (id: number) => {
        setselectcategory(id);
        onCategoryChange(id);
    }

    if (loading) {
        return <p className="text-center text-gray-700">Đang tải danh mục…</p>;
      }
    

    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <h1 className='text-w-4xl font-bold text-center mb-8 text-gray-900'>Bảng xếp hạng</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
                {categories.map(cat => (
                    <div key={cat.id} className="bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4 text-center shadow-lg">
                        <span onClick={() => categoryClick(cat.id)} className="text-blue-700 font-semibold text-lg tracking-wide">
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Header;