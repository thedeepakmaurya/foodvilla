const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center" data-testid="shimmer">
            {Array(9).fill("").map((e, index) => (<div className=" w-56 h-80 border bg-amber-100 m-5" key={index}></div>)
            )}
        </div>
    )
}

export default Shimmer;