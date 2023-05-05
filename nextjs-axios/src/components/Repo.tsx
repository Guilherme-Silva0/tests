export async function Repo() {
  // const response = await fetch(
  //   "https://api.github.com/users/Guilherme-Silva0/repos",
  //   {
  //     cache: "no-store",
  //   }
  // );
  // const repos = await response.json();

  return (
    <div className="text-gray-200 w-full h-full">
      <h1 className="text-2xl font-bold text-center">Repositorios</h1>
      <div className="w-full grid grid-cols-4 justify-center h-full p-4">
        {/* {repos.map(
          (repo: { name: string; visibility: string; language: string }) => (
            <>
              <div className="bg-slate-800 w-64 h-24 pt-3 pl-3 pr-3 flex justify-between flex-wrap rounded-lg shadow-lg">
                <h1>{repo.name}</h1>
                <p>{repo.visibility}</p>
                <p>{repo.language}</p>
              </div>
            </>
          )
        )} */}
        <div className="bg-slate-800 w-64 h-24 pt-3 pl-3 pr-3 flex justify-between flex-wrap rounded-lg shadow-lg">
          <h1 className="w-full text-xl text-blue-500">GHash</h1>
          <p>Public</p>
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
}
