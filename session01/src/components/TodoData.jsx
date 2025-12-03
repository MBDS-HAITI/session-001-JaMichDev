function TodoData() {
  const todo = {
    title: "Ma Deuxième tache",
    description: "ceci est la description de ma deuxième tache"
  };

  const todos = [
    {
      title: "Ma Troisième tache",
      description: "ceci est la description de ma troisième tache"
    },
    {
      title: "Ma Quatrième tache",
      description: "ceci est la description de ma quatrième tache"
    }
  ];

  return (
    <div>
      <Todo {...todo} />
      {todos.map((t, index) => (
        <Todo key={index} {...t} />
      ))}
      
    </div>
  );
}

export { TodoData };