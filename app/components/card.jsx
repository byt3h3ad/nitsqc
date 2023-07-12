export default function Card({src}){
    return(
        
        <div className= "inline-block" >
            <img src={src}/>
            <div className="pb-[1.5rem] px-[0.75rem]"> 
                <h2 className="font-outfit font-[600] text-[1.75rem] my-[0.8125rem] text-center">LOREM IPSUM</h2>
                <p className="text-center font-outfit text-[1.25rem] text-[#747171] font-[500]">Designation</p>

            </div>

        </div>
        
    )
}