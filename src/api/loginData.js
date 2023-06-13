const LOGIN_URL = "https://openmarket.weniv.co.kr/accounts/login/"

const loginApi = async (userInput) => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...userInput }),
        });

        const accountData = await response.json();

        if (response.ok) {
            return accountData;
        }

    } catch (error) {
        console.log('Account API 에러가 발생했습니다', error);
    }
};

export default loginApi;