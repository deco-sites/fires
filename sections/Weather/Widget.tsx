import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
    temperature: Temperature | null;
    location: string;
}

export default function Widget({ temperature, location }: Props) {
    return (
        <div class="text-larger text-center max-w-56 mx-auto my-0 py-10 flex justify-center">
            <div class="!w-[150px] !h-[150px] widget flex flex-col p-0  justify-center items-center rounded-full" style="height:120px; width:120px; box-shadow: 0 0 30px 5px rgba(0,0,0,.25)">
                <div class="flex justify-center temperature text-4xl font-bold text-white" style="text-shadow: 0 0 5px rgb(0 0 0 / 50%)">
                    {temperature?.celsius} <div class="text-bigger">°C</div>
                </div>
                <div class="location italic text-base text-[#00000060]">
                    {location}  
                </div>
            </div>
           
        </div>
    );
}
