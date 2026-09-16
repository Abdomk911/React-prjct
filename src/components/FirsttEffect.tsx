import { Asciify } from "./Asciify";
import LaLavande from "./LaLavande.jpg";
export default function FirsttEffect() {
  return ( <div className="flex justify-center items-center w-full h-64 bg-slate-800 rounded-lg overflow-hidden mt-2">
          <Asciify className="w-full h-full">
            <img
              src={LaLavande}
              alt="Test"
              className="w-full h-full object-cover"
            />
          </Asciify>
        </div>)}
    
