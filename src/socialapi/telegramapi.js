import axios from "axios";
export const getTelegramCount = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.telegram.org/bot5542041664:AAEmbPRy6v41ci5OfW7NEoOBElB2jbUk0Zk/getChatMembersCount?chat_id=-1001421945815').then(res => {
            console.log(res.data.result);
            resolve(res.data.result);
        })
    })
}
