exports.handler = async function (event) {

  try {

    const body = event.body
      ? JSON.parse(event.body)
      : {};

    const targetDate = body.targetDate || ";

    return {
      statusCode: 200,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        success: true,
        message: "Netlify 서버 연결에 성공했습니다.",
        targetDate: targetDate
      })
    };

  } catch (error) {

    return {
      statusCode: 500,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        success: false,
        message: error.message
      })
    };

  }

};
