const API_KEY = process.env.NEXT_PUBLICK_API_KEY;

export const getForecast = async () => {
    const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=seoul&aqi=no`
    );

    if(!res.ok){
        if(!res.ok) throw new Error("날씨 정보를 가져올 수 없습니다.");
    }

    return res.json();
}
