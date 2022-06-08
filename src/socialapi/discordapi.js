import axios from "axios";
export const getDiscordCount = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://discord.com/api/v9/invites/sperax?with_counts=true&with_expiration=true').then(res => {
            console.log(res.data.approximate_member_count);
            resolve(res.data.approximate_member_count)
        })
    })
}
