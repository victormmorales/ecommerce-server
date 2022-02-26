module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: "AKIAQ2DFCT753BDSF2GG",
      secretAccessKey: "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",
      region: "us-east-1",
      params: {
        Bucket: "game-ecommerce",
      },
    },
  },
});
