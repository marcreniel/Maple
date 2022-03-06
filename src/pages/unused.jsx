const profileForm = new FormData();
profileForm.append('userEvent', 2030);
profileForm.append('userParam', 3);
profileForm.append('deploymentId', 'aspen');
profileForm.append('org.apache.struts.taglib.html.TOKEN', profileToken);
const postStatus = await axios({method: 'post', url: '/aspen/portalStudentDetail.do', data: profileForm, withCredentials: true});
$ = cheerio.load(postStatus.data);
let photo = 'https://aspen.cps.edu/aspen/' + $('span[id="propertyValue(relStdPsnOid_psnPhoOIDPrim)-span"] > img').attr('src');