import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
interface GameType {
    id: number;
    name: string;
    price: number;
}
interface Props {
    categoryId: number;
}

const Game: React.FC<Props> = ({ categoryId }) => {
    const [games, setGames] = useState<GameType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const perPage = 5;

    // const currentUserId = 4;

    const [currentUserId, setCurrentUserId] = useState<number | null>(null);
    const [userRank, setUserRank] = useState<number | null>(null);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/2')
            .then(res => {
                setCurrentUserId(res.data.id);
            })
            .catch(err => {
                console.error("Không lấy được user hiện tại", err);
            });
    }, []);

    useEffect(() => {

        setLoading(true);

        axios
            .get(`http://localhost:8000/api/products?category_id=${categoryId}&page=${currentPage}`)
            .then(res => {
                const fetchedGames = res.data.data;
                setGames(fetchedGames);
                setTotalPages(res.data.last_page);


                const userIndex = fetchedGames.findIndex((game: GameType) => game.id === currentUserId);
                if (userIndex !== -1) {
                    const calculatedRank = (currentPage - 1) * perPage + userIndex + 1;
                    setUserRank(calculatedRank);

                    if (currentPage === 2) {
                        setCurrentPage(1);
                    }
                } else {
                    setUserRank(null); 
                }


            })
            .catch(err => {
                console.error('Lỗi khi lấy dữ liệu game', err);
                setGames([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId, currentPage, currentUserId]);

    useEffect(() => {
        setCurrentPage(1);
    }, [categoryId]);


    return (
        <>
            <div className='min-h-[200px]'>
                {loading ? (
                    <p className='text-center text-black'>Đang tải bảng xếp hạng...</p>
                ) : games.length > 0 ? (
                    <div className='grid grid-cols-2 gap-4'>
                        {games.map((game, index) => {
                            const rank = (currentPage - 1) * perPage + index + 1;
                            let bgColor = 'bg-red-500';
                            if (rank === 1) bgColor = 'bg-yellow-500';
                            else if (rank === 2) bgColor = 'bg-gray-500';
                            else if (rank === 3) bgColor = 'bg-orange-500';
                            return (
                                <div key={game.id} className={` text-white p-4 rounded-lg flex items-center justify-between  ${bgColor}`}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold">{rank}</span>

                                        <span className="text-xl">{game.name}</span>
                                    </div>
                                    <span className="text-xl font-semibold">{game.price}</span>
                                </div>
                            );
                        })}


                    </div>
                ) : (
                    <p className='text-center text-black'>Không có người chơi nào</p>
                )}

            </div>


            <div className="mt-4 text-center text-black">
                {userRank ? (
                    <p>
                        Hạng của bạn: <span className="font-bold">{userRank}</span>
                    </p>
                ) : (
                    <p>Bạn không có trong bảng xếp hạng hiện tại.</p>
                )}
            </div>



            <div className="flex justify-center gap-3 mt-8 text-white">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-2 py-1 bg-gray-500 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`text-lg px-2 py-1 ${currentPage === page ? 'font-bold bg-blue-500' : ''}`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 bg-gray-500 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Game;