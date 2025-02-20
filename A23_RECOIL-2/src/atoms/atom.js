import {atom, selector} from "recoil"

export const messagesAtom = atom({
    key:"messagesAtom",
    default:102
})

export const networkAtom = atom({
    key:"networkAtom",
    default:2
})

export const jobAtom = atom({
    key:"jobAtom",
    default:11
})

export const allNotificationSelector = selector({
    key:"allNotificationSelector",
    get: ({get}) => {
        const messagesAtomCount = get(messagesAtom);
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobAtom);
        return messagesAtomCount + networkAtomCount + jobAtomCount;
    }
})
