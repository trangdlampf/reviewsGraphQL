module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  autoReload: { 'enabled': true },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2ccb1a2bac4bf7d01593db383fc48a70'),
    },
  },
});
