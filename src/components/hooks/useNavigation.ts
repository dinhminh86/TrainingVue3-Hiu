import { useRouter } from "vue-router";

export function useNavigation() {
    const router = useRouter();

    const navigate = (to?: string, href?: string, target: string = '_self') => {
        console.log("Navigate target:", target);
        
        if(to)
            router.push(to);
        else if(href)
            window.open(href, target);
    }
    return navigate;
};