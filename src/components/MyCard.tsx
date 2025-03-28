export const MyCard = () => {

    const cards = [
        { id: 1, title: "Card 1", description: "This is the first card." },
        { id: 2, title: "Card 2", description: "This is the second card." },
        { id: 3, title: "Card 3", description: "This is the third card." },
        { id: 4, title: "Card 4", description: "This is the fourth card." },
    ];
    return (
        <div className="p-10">
            <h2 className="font-bold text-center text-2xl">Responsive Card</h2>
            <div className="flex flex-col md:grid grid-cols-3  gap-4 mt-10">
                {cards.map((card) => (
                    <div key={card.id} className="bg-blue-950 p-4 text-gray-100 rounded-lg hover:bg-blue-600 transition-all">
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                        <p className="mt-2">{card.description}</p>    
                    </div>
                ))}
            </div>
        </div>
    );
}