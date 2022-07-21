import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faHome,
    faChevronLeft,
    faCircleInfo,
    faUser,
    faKey,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faCirclePlay} from '@fortawesome/free-regular-svg-icons';

export const icons = () => {
    library.add(faHome, faRightToBracket, faChevronLeft, faCircleInfo, faUser, faKey);
};
