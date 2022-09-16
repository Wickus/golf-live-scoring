const RoundSection = () => {
    return <div className={"mt-5 flex items-center justify-between"}>
        <nav>
            <ul className={"flex items-center justify-start"}>
                <li className={"w-28 bg-blue-500 pt-2 pb-2 mr-2 rounded-xl text-center"}>Round 1</li>
                <li className={"w-28 bg-white text-gray-800 pt-2 pb-2 mr-2 rounded-xl text-center"}>Round 2</li>
            </ul>
        </nav>
        {/*<p>Tee Time: </p>*/}
    </div>
}

export default RoundSection