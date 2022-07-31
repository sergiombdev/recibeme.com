import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faHome,
    faChevronLeft,
    faCircleInfo,
    faUser,
    faKey,
    faRightToBracket,
    faBoxesStacked,
    faGear,
    faCirclePlus,
    faListCheck
} from "@fortawesome/free-solid-svg-icons";
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faListCheck } from "@fortawesome/free-regular-svg-icons";

export const icons = () => {
    library.add(
        faHome,
        faListCheck,
        faCirclePlus,
        faBoxesStacked,
        faGear,
        faRightToBracket,
        faChevronLeft,
        faCircleInfo,
        faUser,
        faKey,
    );
};
