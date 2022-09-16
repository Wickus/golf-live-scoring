const ProfileComponent = () => {
    return <div className={"mt-10 p-4 border-[1px] border-gray-700 rounded-3xl"}>
        {/* ICON */} {/* NAME */} {/* Tournament Stroke difference */}
        {/* HCI */} {/* PHC */} {/* LAST 20 rounds AVG SCORE */} {/* PREDICTED SCORE */}
        <div className={"flex items-start justify-start"}>
            <div className={"flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500"}>
                <p className={"text-3xl"}>E</p>
            </div>
            <div className={"flex flex-col items-start justify-evenly pl-5 h-full"}>
                <h2 className={"text-2xl"}>Wickus Van der Merwe</h2>
                <div className={"mt-3 text-gray-500 text-sm"}>
                    <span className={"mr-4"}>HCI: 0.0</span>
                    <span className={"mr-4"}>PHI: 2.0</span>
                    <span className={"mr-4"}>LAST 5 RND AVG: 74</span>
                    <span>PROJECTED: 77</span>
                </div>
            </div>

        </div>
    </div>
}

export default ProfileComponent