export const fetchDailyAyah = async () => {
    // Replace with your actual API call
    const response = await fetch('https://api.example.com/daily-ayah');
    const data = await response.json();
    return data;
  };
  