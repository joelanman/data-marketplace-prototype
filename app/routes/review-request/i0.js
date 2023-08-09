// #################################################
// Stage: Beta, MVP
// Iteration: 0
// #################################################

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// #################################################
// Supplier
// #################################################

router.post('/bMVP_i0--decision-after-declaration', (req, res) => {
  var decision = req.session.data["your-decision"];

  if (decision == 'accept') {
    res.redirect('supplier/110-accept');
  } else {
    res.redirect('supplier/110-comment');
  }
});

// Handles form submissions from 'decision'
router.post('/bMVP_i0--decision-routes', (req, res) => {

  const yourDecision = req.body["your-decision"];
  console.log("yourDecision value: ", yourDecision);

  // If the checkbox is checked, redirect to agree.html
  if (yourDecision === undefined) {
    res.redirect('supplier/110-proceeding');
  } 
  if (yourDecision === 'meeting') {
    res.redirect('supplier/110-proceeding');
  } 
  if (yourDecision === 'accept') {
    res.redirect('supplier/030-declaration-cat');
  } 
  if (yourDecision === 'comment') {
    res.redirect('supplier/110-comment');
  } 
  if (yourDecision === 'reject') {
    res.redirect('supplier/110-reject');
  } 

});

module.exports = router;

