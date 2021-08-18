import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async (req, res) => {
  const { first, last, email } = req.body;
  console.log(process.env.MAILCHIMP_API_KEY);
  console.log(process.env.MAILCHIMP_API_SERVER);
  console.log(process.env.MAILCHIMP_API_AUDIENCE_ID);

  if (!email) return res.status(400).json({ error: 'Please enter your email address' });

  if (!first) return res.status(400).json({ error: 'Please enter your first name' });

  if (!last) return res.status(400).json({ error: 'Please enter your last name' });

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: first,
        LNAME: last,
      },
    });
    return res.status(201).json({ error: null });
  } catch (error) {
    if (error.response.body.detail)
      return res.status(500).json({ error: error.response.body.detail });
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
