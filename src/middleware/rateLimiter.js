import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // In a real world app need to write a userId or ipAddress
    //  instead of 'my-rate-limit'
    const {success} = await ratelimit.limit('my-rate-limit');

    if(!success) {
       return res.status(421).json({
        message: 'Too Many Requests... Please Try Again Later!'
      });
    };

    next();

  } catch (error) {
    console.log('RateLimit Error', error);
    next(error);
  };
};

export default rateLimiter;