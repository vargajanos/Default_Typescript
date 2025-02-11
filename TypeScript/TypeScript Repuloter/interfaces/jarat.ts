import { TRepulogep } from "./repulogep";
import { TUtas } from "./utas";

export interface TJarat{
    id: number
    repulogep: TRepulogep
    indulas: Date
    celallomas: string
    utasok: TUtas[];
}
