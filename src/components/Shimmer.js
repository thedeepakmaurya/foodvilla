const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(9).fill("").map((e, index) => (<div className="shimmer-card" key={index}></div>)
            )}
        </div>
    )
}

export default Shimmer;