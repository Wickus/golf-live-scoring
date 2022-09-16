import {useContext} from "react";
import {Context} from "../../pages";

const Table = () => {
    const {course} = useContext(Context)
    const th = "border-[1px] border-gray-700 w-6 pt-1 pb-1"
    const courseData:{[key:string]:{stroke:number, par:number, strokes:number}} = {...course}
    const front = Object.keys(courseData).filter((item,index)=> index <= 8);
    const back = Object.keys(courseData).filter((item,index)=> index > 8);

    const strokesFormat = (stroke:number, par:number) => {
        switch (true){
            case stroke === 0:
                return "-"
            case stroke - par === 0:
                return stroke
            case stroke - par === -1:
                return <span className={"m-auto flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-xs"}>{stroke}</span>
            case stroke - par === -2:
                return <span className={"m-auto flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-xs"}>{stroke}</span>
            case stroke - par === -3:
                return <span className={"m-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-xs"}>{stroke}</span>
            case stroke - par === 1:
                return <span className={"m-auto flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-xs"}>{stroke}</span>
            case stroke - par >= 2:
                return <span className={"m-auto flex items-center justify-center w-5 h-5 rounded-full bg-black text-xs"}>{stroke}</span>
        }
    }

    return <div className={"mt-5"}>
        <h3 className={"mt-1 mb-1"}>Front Nine</h3>
        <table className={"w-full text-center"}>
            <thead>
                <tr>
                    <th className={"border-[1px] border-gray-700 pt-2 pb-2 w-20 pl-2 text-left text-xs"}>Hole</th>
                    {front.map((hole,index)=>{
                        return <th key={index} className={`${th} text-xs`}>{hole}</th>
                    })}
                    <th className={"border-[1px] border-gray-700 pt-2 pb-2 pl-2 text-xs"}></th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(courseData["1"]).map((value, index)=>{
                return <tr key={index}>
                    <td className={`${th} pl-2 text-left ${value !== "strokes" ? "text-xs":""}`}>{value}</td>
                    {front.map((hole:any, index)=>{
                        const data = courseData[hole]
                        switch (value){
                            case "par":
                                return <td key={index} className={`${th} text-xs`}>{data.par}</td>
                            case "stroke":
                                return <td key={index} className={`${th} text-xs text-gray-400`}>{data.stroke}</td>
                            case "strokes":
                                return <td key={index} className={`${th} !pt-2 !pb-2`}>{strokesFormat(data.strokes, data.par)}</td>
                        }
                    })}

                    {value === "par" ? <td className={`${th} !pt-2 !pb-2 text-xs`}>In</td> : null}
                    {value === "stroke" ? <td className={`${th} !pt-2 !pb-2`}></td> : null}
                    {value === "strokes" ? <td className={`${th} !pt-2 !pb-2`}>{0}</td> : null}

                </tr>
            })}
            </tbody>
        </table>

        <h3 className={"mt-3 mb-1"}>Back Nine</h3>
        <table className={"w-full text-center"}>
            <thead>
            <tr>
                <th className={"border-[1px] border-gray-700 pt-2 pb-2 w-20 pl-2 text-left text-xs"}>Hole</th>
                {back.map((hole,index)=>{
                    return <th key={index} className={`${th} text-xs`}>{hole}</th>
                })}
                <th className={"border-[1px] border-gray-700 pt-2 pb-2 pl-2 text-xs"}></th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(courseData["1"]).map((value, index)=>{
                return <tr key={index}>
                    <td className={`${th} pl-2 text-left ${value !== "strokes" ? "text-xs":""}`}>{value}</td>
                    {back.map((hole:any, index)=>{
                        const data = courseData[hole]
                        switch (value){
                            case "par":
                                return <td key={index} className={`${th} text-xs`}>{data.par}</td>
                            case "stroke":
                                return <td key={index} className={`${th} text-xs text-gray-400`}>{data.stroke}</td>
                            case "strokes":
                                return <td key={index} className={`${th} !pt-2 !pb-2`}>{strokesFormat(data.strokes, data.par)}</td>
                        }
                    })}
                    {value === "par" ? <td className={`${th} !pt-2 !pb-2 text-xs`}>Out</td> : null}
                    {value === "stroke" ? <td className={`${th} !pt-2 !pb-2`}></td> : null}
                    {value === "strokes" ? <td className={`${th} !pt-2 !pb-2`}>{0}</td> : null}

                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default Table