export const CardGrid = () => {
  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-6">Responsive Card Grid</h2>
      <div className="grid gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
