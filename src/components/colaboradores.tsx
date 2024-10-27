import { colaboradoresBanner } from "../assets/images"

export const Colaboradores = () => {
    return(
        <div className="border w-full h-[65svh] overflow-hidden relative">
            <div className="absolute bg-[#00000081] inset-0 blur-lg"/>
            <img src={colaboradoresBanner} className="w-full object-cover h-full"/>
            <div className="absolute inset-0 flex flex-col items-center">
                <div className="text-white text-2xl font-semibold my-10 p-5 backdrop-blur-md rounded  text-center rounded-sm">
                    Torne-se Colaborador
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                    <div className="text-white w-64 p-5 backdrop-blur-md rounded border border-[#E37A00] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis id perspiciatis eius ea necessitatibus quisquam suscipit, consequatur numquam voluptate quaerat cupiditate vel eligendi quasi! Quibusdam quo architecto odit quod!
                    </div>
                    <div className="text-white w-64 p-5 backdrop-blur-md rounded border border-[#E37A00] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis id perspiciatis eius ea necessitatibus quisquam suscipit, consequatur numquam voluptate quaerat cupiditate vel eligendi quasi! Quibusdam quo architecto odit quod!
                    </div>
                    <div className="text-white w-64 p-5 backdrop-blur-md rounded border border-[#E37A00] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis id perspiciatis eius ea necessitatibus quisquam suscipit, consequatur numquam voluptate quaerat cupiditate vel eligendi quasi! Quibusdam quo architecto odit quod!
                    </div>
                    <div className="text-white w-64 p-5 backdrop-blur-md rounded border border-[#E37A00] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis id perspiciatis eius ea necessitatibus quisquam suscipit, consequatur numquam voluptate quaerat cupiditate vel eligendi quasi! Quibusdam quo architecto odit quod!
                    </div>
                </div>
            </div>
        </div>
    )
}