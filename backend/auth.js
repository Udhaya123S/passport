const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '843432588668-79dihl39e905o08jtgap2sjumq07usat.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';


passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        console.log("Access Token:", accessToken);
        console.log("User Profile:", profile);
  
        const allowedEmail = "udhayakumar19293@gmail.com";
        if (profile.emails[0].value === allowedEmail) {
          return done(null, profile);
        } else {cl
          return done(null, false, { message: "Unauthorized email" });
        }
      }
    )
  );
  
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
