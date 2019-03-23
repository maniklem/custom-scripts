// script SAR false colors.
//Author: Annamaria Luongo, https://twitter.com/annamaria_84

c1 = 10e-4; 
c2 = 0.01; 
c3 = 0.02; 
c4 = 0.03; 
c5 = 0.045; 
c6 = 0.05; 
c7 = 0.9; 
c8 = 0.25; 
band1 = c4 + Math.log (c1 - Math.log (c6 / (c3 + 2 * VV))); 
band2 = c6 + Math.exp (c8 * (Math.log (c2 + 2 * VV) + Math.log (c3 + 5 * VH))); 
band3 = 1 - Math.log (c6 / (c5 - c7 * VV)); 
return [band1,band2,band3];