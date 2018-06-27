"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eosCode_1 = require("./eosCode");
try {
    /* This code is used to teest the custom functions found in eosCode.ts (eosCode.js).*/
    var dewBubDataSet = [["Vapor, Error messages On, predictive", "(MW)", "(TC, K)", "(PC, bara)", "(OMEGA)", "(ZC)", "k(i)", "b(i)", "(TB, K)", "(Hvap, kJ/kg-mole)", "(Hf298, kJ/g-mole)", "(S298, J/g-mole/K)", "(Gf298, kJ/g-mole)", "(CPData)", "(NIST-TMN1)", "(NIST-TMX1)", "(NIST-A1)", "(NIST-B1)", "(NIST-C1)", "(NIST-D1)", "(NIST-E1)", "(NIST-F1)", "(NIST-G1)", "(NIST-H1)", "(NIST-TMN2)", "(NIST-TMX2)", "(NIST-A2)", "(NIST-B2)", "(NIST-C2)", "(NIST-D2)", "(NIST-E2)", "(NIST-F2)", "(NIST-G2)", "(NIST-H2)", "(NIST-TMN3)", "(NIST-TMX3)", "(NIST-A3)", "(NIST-B3)", "(NIST-C3)", "(NIST-D3)", "(NIST-E3)", "(NIST-F3)", "(NIST-G3)", "(NIST-H3)", "(NIST-TMN4)", "(NIST-TMX4)", "(NIST-A4)", "(NIST-B4)", "(NIST-C4)", "(NIST-D4)", "(NIST-E4)", "(NIST-F4)", "(NIST-G4)", "(NIST-H4)", "(NIST-TMN5)", "(NIST-TMX5)", "(NIST-A5)", "(NIST-B5)", "(NIST-C5)", "(NIST-D5)", "(NIST-E5)", "(NIST-F5)", "(NIST-G5)", "(NIST-H5)", "(NIST-TMN6)", "(NIST-TMX6)", "(NIST-A6)", "(NIST-B6)", "(NIST-C6)", "(NIST-D6)", "(NIST-E6)", "(NIST-F6)", "(NIST-G6)", "(NIST-H6)"],
        ["C2H6(g)", 30.0694, 305.32, 48.7200865036264, 0.099493, 0.285, 0.525412174685334, 0.0000405378730197125, 184.5, 14706.76, -84.68416, 229.5, -32.92808, "NIST", 100, 500, 41.54955232, -83.34130553, 543.2552021, -461.2258257, -0.024867482, -20779.83721, 21.73171532, 0, 500, 1500, 5.115892174, 185.661947, -81.40412739, 13.511799, -0.336354192, -20777.25907, -80.34509134, 0, 1500, 2300, 116.7535757, 41.67536742, -10.62625199, 0.93721316, -28.39504878, -20865.14689, 18.65562634, 0, 2300, 3000, 200.8140426, -22.38877708, 7.338511413, -0.802646327, -84.34981975, -20974.05145, 50.23918917, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C7H16(g)", 100.2029, 540.2, 27.4000520601943, 0.349469, 0.263, 0.880647113097087, 0.000127531347023652, 371.6, 31697.984, -187.77792, 328.5, 7.99144, "NIST", 200, 300, -55.87518748, 753.0636594, 0, -797.2749544, 1.57162621, 16735.52162, -277.2845727, 0, 500, 1000, 39.95718809, 587.3215361, -297.2009308, 55.03193433, -3.526976565, 16697.19206, -134.8046528, 0, 1000, 1500, 5438.918669, -8372.498411, 5224.029064, -1140.499555, -768.3952272, 13471.74518, 6080.476668, 0, 1500, 3000, 0, 0, 0, 0, 0, 17156.9139, 491.7459905, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    var dataRange = [
        ["error messages on, predictive", "(MW)", "(TC, K)", "(PC, bara)", "(OMEGA)", "(ZC)", "k(i)", "b(i)", "(TB, K)", "(Hvap, kJ/kg-mole)", "(Hf298, kJ/g-mole)", "(S298, J/g-mole/K)", "(Gf298, kJ/g-mole)", "(CPData)", "(NIST-TMN1)", "(NIST-TMX1)", "(NIST-A1)", "(NIST-B1)", "(NIST-C1)", "(NIST-D1)", "(NIST-E1)", "(NIST-F1)", "(NIST-G1)", "(NIST-H1)", "(NIST-TMN2)", "(NIST-TMX2)", "(NIST-A2)", "(NIST-B2)", "(NIST-C2)", "(NIST-D2)", "(NIST-E2)", "(NIST-F2)", "(NIST-G2)", "(NIST-H2)", "(NIST-TMN3)", "(NIST-TMX3)", "(NIST-A3)", "(NIST-B3)", "(NIST-C3)", "(NIST-D3)", "(NIST-E3)", "(NIST-F3)", "(NIST-G3)", "(NIST-H3)", "(NIST-TMN4)", "(NIST-TMX4)", "(NIST-A4)", "(NIST-B4)", "(NIST-C4)", "(NIST-D4)", "(NIST-E4)", "(NIST-F4)", "(NIST-G4)", "(NIST-H4)", "(NIST-TMN5)", "(NIST-TMX5)", "(NIST-A5)", "(NIST-B5)", "(NIST-C5)", "(NIST-D5)", "(NIST-E5)", "(NIST-F5)", "(NIST-G5)", "(NIST-H5)", "(NIST-TMN6)", "(NIST-TMX6)", "(NIST-A6)", "(NIST-B6)", "(NIST-C6)", "(NIST-D6)", "(NIST-E6)", "(NIST-F6)", "(NIST-G6)", "(NIST-H6)"],
        ["H2(g)", 2.016, 33.2, 12.9696, -0.22, 0.305, 0.022278672, 0.0000165587, 20.4, 903.744, 0, 130.6, 0, "NIST", 100, 1000, 33.066178, -11.363417, 11.432816, -2.772874, -0.158558, -33063.77257, 6.492021333, 0, 1500, 3000, 18.563083, 12.257357, -2.859786, 0.268238, 1.97799, -33054.93666, -9.927881667, 0, 3000, 4500, 43.41356, -4.293079, 1.272428, -0.096876, -20.533862, -33092.31145, -4.137208523, 0, 4500, 6000, 28.23183843, 1.441908122, 0.46712765, -0.057019774, 20.92451449, -33052.47236, 0.856530474, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CO(g)", 28.0102, 132.9, 34.95712499, 0.049, 0.295, 0.449562662, .0000245925, 81.7, 6041.696, -110.54128, 197.6, -137.27704, "NIST", 100, 1500, 29.17809934, -3.442822011, 12.30386157, -4.919109975, 0.001734821, -43770.89077, -14.97392822, 0, 1500, 3000, 33.51609995, 2.97325271, -0.78953966, 0.081545922, -2.830584116, -43778.10295, -17.88201389, 0, 3000, 4500, 40.27106107, -1.503879582, 0.356431858, -0.025781912, -9.48704928, -43788.57991, -16.43242525, 0, 4500, 6000, 49.72904012, -4.522906974, 0.666606414, -0.032816699, -40.10515784, -43816.07756, -20.75517291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CO2(g)", 44.0097, 304.2, 73.76459998, 0.225, 0.274, 0.7079838, .0000266763, 194.7, 17154.4, -393.42152, 213.6, -394.38384, "NIST", 100, 1500, 19.8157012, 69.68966795, -47.00836067, 11.83529476, 0.028348853, -29764.02842, -72.99307845, 0, 1500, 3000, 54.17759689, 6.66832788, -1.896164771, 0.21012987, -5.046621648, -29784.09369, -31.19429921, 0, 3000, 4500, 57.45706603, 2.501035123, -0.336211297, 0.020639662, -2.368437183, -29784.48896, -27.46087678, 0, 4500, 6000, 200.1085855, -54.65873449, 8.156922916, -0.422155577, -347.9630323, -30137.06245, -65.877118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["H2O(g)", 18.0155, 647.3, 220.4831999, 0.344, 0.229, 0.873236187, .0000189908, 373.2, 40655.928, -241.8352, 188.7, -228.61376, "NIST", 100, 500, 35.34390859, -17.71231421, 48.74511065, -27.34939557, -0.007337794, -17671.35864, 28.38643143, 0, 500, 2000, 25.90000239, 15.78950582, 0.053222394, -0.829425367, 0.385313363, -17668.42466, 10.85629404, 0, 2000, 4000, 41.28893863, 9.412664087, -1.772490847, 0.127669703, -11.46275655, -17691.3327, 12.56134395, 0, 4000, 6000, 105.3243363, -17.40432643, 2.486497639, -0.11771861, -158.8520609, -17844.93926, -2.385477647, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["O2(g)", 31.999, 154.6, 50.45984999, 0.021, 0.288, 0.406908425, .0000198188, 90.2, 6819.92, 0, 205, 0, "NIST", 100, 1500, 26.49974423, 9.101362233, 1.050191954, -1.817412111, 0.017443279, -39758.72505, -23.52976605, 0, 1500, 3000, 36.96844019, -1.3404784, 1.358159235, -0.188856387, -1.871736832, -39766.34808, -14.71010222, 0, 3000, 4500, 17.00635387, 12.72823928, -2.398693374, 0.171238233, 14.74118165, -39737.71366, -20.39773684, 0, 4500, 6000, 42.34511682, 2.065246542, -0.720073978, 0.077512731, -42.09375898, -39797.78501, -26.07817127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["N2(g)", 28.013, 126.2, 33.94387499, 0.04, 0.29, 0.435898528, .0000240498, 77.4, 5577.272, 0, 191.5, 0, "NIST", 100, 500, 29.01626299, 1.626463026, -9.053085583, 16.12022719, -5.53703E-06, -14508.20948, 19.75925786, 0, 500, 1500, 19.49247634, 19.85893876, -8.522881615, 1.333503521, 0.531036472, -14504.45561, 5.653556139, 0, 1500, 3500, 33.41212631, 2.747840706, -0.654813052, 0.060104737, -3.198574247, -14515.81144, 17.42846496, 0, 3500, 6000, 31.75507893, 2.796145442, -0.469708447, 0.030431432, 2.838920674, -14510.11488, 18.87202962, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["Ar(g)", 39.948, 150.8, 48.73732499, -0.004, 0.291, 0.368466641, .0000200149, 87.3, 6527.04, 0, 0, 0, "NIST", 100, 1500, 20.786, 0, 0, 0, 0, -31179, -8.427997737, 0, 1500, 3000, 20.786, 0, 0, 0, 0, -31179, -8.427997737, 0, 3000, 4500, 20.786, 0, 0, 0, 0, -31179, -8.427997737, 0, 4500, 6000, 20.786, 0, 0, 0, 0, -31179, -8.427997737, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["HCN(g)", 27.0252, 456.8, 53.90489998, 0.407, 0.197, 0.957627842, .0000548165, 298.9, 25216.968, 130.5408, 201.7, 120.12264, "NIST", 100, 1800, 22.85349486, 51.49542565, -32.67064291, 8.576011223, 0.014040318, -41178.7007, -69.86790329, 0, 1500, 3000, 45.11531867, 12.35881215, -3.222247629, 0.315294471, -4.814108407, -41193.95799, -44.89985382, 0, 3000, 4500, 56.68463936, 3.142987486, -0.478529363, 0.025737757, -11.99376258, -41208.4179, -40.10216916, 0, 4500, 6000, 32.01625594, 11.93115963, -1.608490798, 0.074250729, 60.53545184, -41140.92357, -30.78766309, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["H2S(g)", 34.08, 373.2, 89.36864997, 0.1, 0.284, 0.5261668, .0000270128, 212.8, 18660.64, -20.16688, 205.7, -33.0536, "NIST", 298, 1400, 26.88412, 18.67809, 3.434203, -3.378702, 0.135882, -28.91211, 233.3747, -20.50202, 1400, 6000, 51.22136, 4.147486, -0.643566, 0.041621, -10.46385, -55.87606, 243.69, -20.50202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["COS(g)", 60.07, 375, 58.76849998, 0.099, 0.26, 0.524678254, .0000412763, 222.9, 0, -138.40672, 231.57, -165.64456, "NIST", 298, 1200, 34.53892, 43.05378, -26.61773, 6.338844, -0.327515, -151.5001, 259.8118, -138.4071, 1200, 6000, 60.3224, 1.738332, -0.209982, 0.01411, -5.128873, -168.6307, 287.6454, -138.4071, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["NH3(g)", 17.0305, 405.6, 112.774725, 0.25, 0.242, 0.743335, .0000232648, 239.7, 23346.72, -45.68928, 192.8, -16.15024, "NIST", 298, 1400, 19.99563, 49.77119, -15.37599, 1.921168, 0.189174, -53.30667, 203.8591, -45.89806, 1400, 6000, 52.02427, 18.48801, -3.765128, 0.248541, -12.45799, -85.53895, 223.8022, -45.89806, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["Cl2(g)", 70.906, 417, 77.00699998, 0.073, 0.275, 0.485786576, .0000350283, 238.7, 20417.92, 0, 0, 0, "NIST", 298, 1400, 33.0506, 12.2294, -12.0651, 4.38533, -0.159494, -10.8348, 259.029, 0, 1400, 6000, 42.6773, -5.00957, 1.904621, -0.165641, -2.09848, -17.2898, 269.84, 0, 3000, 6000, -42.5535, 41.6857, -7.12683, 0.387839, 101.144, 132.764, 264.786, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["HCl(g)", 36.461, 324.6, 83.08649998, 0.12, 0.249, 0.555824352, .0000252715, 188.1, 16150.24, -92.29904, 0, -95.26968, "NIST", 100, 1500, 30.28248368, -7.046721372, 12.35450213, -3.991092882, -0.005893511, -45424.64948, -11.11855353, 0, 1500, 3000, 28.01901886, 6.854013191, -1.755645924, 0.173426055, -1.970247335, -45427.59898, -20.29958969, 0, 3000, 4500, 37.80803971, -0.039226877, 0.105809768, -0.008609727, -10.50367145, -45441.85782, -17.58651578, 0, 4500, 6000, 36.02325381, 0.876112045, -0.071673552, 0.003660023, -7.634284234, -45438.32323, -17.52591076, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CH4(g)", 16.0427, 190.6, 46.00154999, 0.008, 0.288, 0.386960805, .0000268018, 111.7, 8179.72, -74.85176, 186.2, -50.8356, "NIST", 100, 1500, -0.703029, 108.4773, -42.52157, 5.862788, 0.678565, 973.3755894, -121.0389743, 0, 1500, 3000, 85.81217, 11.26467, -2.114146, 0.13819, -26.42221, 896.6866586, -55.33949751, 0, 3000, 4500, 101.6615754, 2.57599532, -0.401632835, 0.022758593, -45.00454087, 868.9682357, -54.38560331, 0, 4500, 6000, 106.5327074, 0.454993325, -0.053356633, 0.002344925, -55.51568715, 857.7013071, -55.33341966, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C2H2(g)", 26.038, 308.3, 61.40294998, 0.184, 0.271, 0.649277428, .0000324787, 189.2, 16945.2, 226.73096, 0, 209.2, "NIST", 100, 1500, 19.03064232, 102.926364, -75.05818379, 21.49074831, 0.005606593, -28604.51067, -101.8411967, 0, 1500, 3000, 55.21146589, 23.56848236, -6.032016973, 0.59634884, -5.568460866, -28624.4303, -52.86135562, 0, 3000, 4500, 53.36408491, 18.1115113, -3.11417585, 0.205339878, 17.05662538, -28605.13273, -42.81514217, 0, 4500, 6000, 62.99498553, 8.185926481, -0.645053898, 0.016735757, 62.05506655, -28593.64029, -30.79556737, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C2H4(g)", 28.0534, 282.4, 50.35852499, 0.085, 0.276, 0.503781928, .0000362748, 169.4, 13543.608, 52.3, 219.5, 68.11552, "NIST", 100, 1500, 2.662347134, 151.3003784, -73.84446407, 13.73394012, 0.163481714, -4097.931634, -160.3693877, 0, 1500, 3000, 87.58069009, 31.51139893, -8.558735363, 0.848200798, -19.08541529, -4160.517076, -78.34486439, 0, 3000, 4500, 125.5626048, 3.066676752, -0.490685773, 0.028589146, -47.29119177, -4211.878806, -65.23480192, 0, 4500, 6000, 133.3839637, -0.316376494, 0.06244615, -0.003794915, -64.45101431, -4230.116311, -66.81548574, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C2H6(g)", 30.0694, 305.32, 48.7200865, 0.099493, 0.285, 0.525412175, .0000405379, 184.5, 14706.76, -84.68416, 229.5, -32.92808, "NIST", 100, 500, 41.54955232, -83.34130553, 543.2552021, -461.2258257, -0.024867482, -20779.83721, 21.73171532, 0, 500, 1500, 5.115892174, 185.661947, -81.40412739, 13.511799, -0.336354192, -20777.25907, -80.34509134, 0, 1500, 2300, 116.7535757, 41.67536742, -10.62625199, 0.93721316, -28.39504878, -20865.14689, 18.65562634, 0, 2300, 3000, 200.8140426, -22.38877708, 7.338511413, -0.802646327, -84.34981975, -20974.05145, 50.23918917, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C3H6(g)", 42.0801, 365, 46.20419999, 0.148, 0.275, 0.596982152, .0000511005, 225.4, 18409.6, 20.41792, 266.9, 62.71816, "NIST", 50, 300, 31.00865699, 67.77834512, 134.8244035, 42.78299429, -0.000976843, -9306.950435, 10.54250417, 0, 300, 800, -27.27320926, 348.0657918, -261.7192498, 85.58166511, 0.783638023, -9295.981202, -121.8952639, 0, 800, 1500, 26.97022147, 187.2914154, -81.39147751, 13.39683006, -1.825056687, -9314.573227, -28.59507576, 0, 1500, 3000, 137.1531081, 46.49976371, -12.71369338, 1.266645991, -30.13231292, -9402.238696, 68.01053428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C3H8(g)", 44.0961, 369.8, 42.45517499, 0.152, 0.281, 0.602827288, .0000563443, 231.1, 18773.608, -103.84688, 269.9, -23.47224, "NIST", 50, 298.15, 23.07952328, 212.1798821, -423.4864451, 940.1885187, 0.003275864, -6888.695628, -24.79666219, 0, 298.15, 700, -58.57414605, 513.2718195, -448.749634, 172.6572325, 1.283781925, -6871.698841, -198.2749915, 0, 700, 1100, 22.78111118, 240.0097445, -102.8273934, 16.25793927, -1.621401532, -6896.01115, -47.80792656, 0, 1100, 1500, 333.2920161, -233.6664453, 166.0931391, -37.5143291, -54.00236366, -7098.247189, 283.1560472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CH3OH(g)", 32.0422, 512.6, 80.95867498, 0.559, 0.224, 1.162688278, .0000409571, 337.8, 35254.384, -201.16672, 0, -162.50656, "NIST", 100, 300, 30.14449162, 110.4731644, -507.0926415, 983.9083541, -0.001313019, -9045.751736, 17.10789792, 0, 300, 900, -12.59416011, 191.7803829, -126.1037935, 35.69304017, 0.865347058, -9035.208862, -62.53622415, 0, 900, 1400, 31.06073868, 88.60295526, -31.29501191, 3.857028387, -2.686079644, -9054.474074, 2.069319004, 0, 1400, 3000, 90.36331291, 21.15078866, -3.644261189, 0.080279219, -19.73141434, -9105.233824, 48.55711367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C4H10(NBg)", 58.1228, 425.2, 37.99687499, 0.193, 0.274, 0.66224193, .0000723868, 272.7, 22392.768, -126.1476, 310.1, -17.1544, "NIST", 50, 298.15, 20.46515449, 488.6428306, -1587.437011, 2779.859172, -0.008031126, -6114.898704, -74.97033063, 0, 298.15, 800, -57.47526591, 597.5751099, -473.9118245, 161.976452, 1.389208502, -6096.481896, -220.2744679, 0, 800, 1100, 180.1095438, 0, 108.2448924, -45.97575591, -15.01868024, -6193.89601, 147.1828359, 0, 1100, 1500, -118.8865783, 546.457048, -274.2542025, 51.07756961, 23.14387014, -6026.735407, -221.3002669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C5H12(g)", 72.1495, 469.6, 33.74122499, 0.251, 0.262, 0.74474203, .0000900287, 309.2, 25773.44, -146.44, 347.82, -8.368, "NIST", 200, 500, 74.58899882, -106.0847816, 1177.042662, -1067.836212, 0.065559052, -37313.4662, 2.237505897, 0, 500, 1000, -146.7577969, 914.1575108, -712.8013049, 221.2730613, 5.703141904, -37260.44676, -467.5167725, 0, 1000, 1500, -1312.451246, 2661.889033, -1602.691201, 347.5502524, 187.2801876, -36521.98135, -1721.607221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["Liquid", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Liquid", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["24", 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["25", 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["26", 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["H2O(l)", 18.0155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 277.15, 333.15, -1429.165382, 9127.297653, -20780.01372, 16844.70388, 16.34881528, 476206.4007, -3592.434156, 333.15, 333.15, 403.15, -1251.962597, 7400.662295, -15542.79528, 11687.36969, 17.17633597, 475863.8506, -3045.77382, 0, 403.15, 458.15, -76594.91998, 358615.8716, -628762.027, 391879.6379, 1399.54948, 492008.5291, -167301.2256, 0, 458.15, 623.15, -118311.3411, 460985.1838, -672115.5372, 348063.3024, 3106.142801, 505974.4794, -236744.0793, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["28", 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["29", 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["30", 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["31", 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["32", 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["33", 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["34", 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["35", 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["36", 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CH4(l)", 16.0427, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 90, 170, -3589.228412, 62874.36243, -403226.5735, 915605.1589, 4.727102362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["38", 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["39", 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C2H6(l)", 30.0694, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 100, 150, 6.161768846, 1191.97789, -8334.032488, 20755.29042, 0.057555653, -930.5424287, -95.41989036, 0, 150, 190, -259.9471212, 3801.211247, -16746.03689, 27549.25909, 0.981506584, -905.2166543, -884.1213097, 0, 190, 230, -1565.327549, 15675.73858, -56441.93268, 73412.95176, 7.034141034, -763.8580766, -4612.684786, 0, 230, 300, -288359.4006, 2249119.002, -6566362.244, 6807748.846, 1887.160439, 35989.37516, -777153.2524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["41", 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "Not Found!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C3H8(l)", 44.0961, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 90, 140, 32.38160975, 855.1532661, -5164.497222, 12111.37821, 0.062675192, -4537.797571, -14.92250223, 0, 140, 200, 69.85208647, 224.1822064, -1222.173022, 3424.998755, 0.012331989, -4539.991188, 115.1107313, 0, 200, 240, -908.1808559, 9183.284303, -31958.45447, 40871.32224, 4.656063834, -4433.363095, -2677.877571, 0, 240, 280, 1029.535006, -7117.212854, 19789.93973, -17900.3948, -6.509340147, -4665.192087, 2683.132156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CH3OH(l)", 32.0422, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 175.59, 300, 289.1766662, -2043.270806, 6623.036565, -6718.008484, -0.833995565, -86709.83603, 718.9342059, 0, 300, 360, -220.0843945, 1751.585596, -3914.782577, 3635.15144, 2.736971926, -86642.0478, -631.7970519, 0, 360, 440, -8679.454209, 46199.20623, -91572.8567, 65170.14974, 125.5649227, -85030.82128, -20078.34203, 0, 440, 495, -3171120.574, 13728343.79, -22282293.9, 12857713.52, 67634.2434, 645669.4159, -6677351.898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C4H10(NBl)", 58.1228, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 140, 360, -8.563033296, 1274.983709, -4973.86925, 7821.828188, 0.389700748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["C5H12(l)", 72.1495, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "NIST", 150, 390, 139.7158872, -195.3424254, 1008.91206, -237.6739183, 0.211013603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var Decomp = [
        ["Headers"],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0.333333333, 0.333333333, 0.333333333, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0.666666667, 0.333333333, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["(g)", 0.4, 0.6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    //const inputTemp: number = -350;
    //const inputPress: number = 5;
    //const inputPhase: string = "Liq222uid";
    var tempC = 50; //[204.1138903] 
    //const tempC: any = 50
    var pBara = [27.57902908]; //12;
    var Phase = ["LiQuId"];
    var ErrorMsgOn = [true];
    var fcnName = "appFunction";
    var UseBinaries = [false]; //"true"
    //const inputMoles = [2207.57,2817.28,1101.64,15,0,12.93,46.16,0.04,34.15,1.21,2.91,0,0,509.32,0,12.91,21.52,5.74,2.87, 495, 0, 0];
    //const inputMoles = [0.1,0.9]
    var inputMoles = [20, 20, 20, 15, 0, 12.93, 46.16, 0.04, 34.15, 1.21, 2.91, 0, 0, 509.32, 0, 12.91, 21.52, 5.74, 2.87, 495, 1500, 0];
    //const inputMoles = [0.09, 0.17, 2.25, 5.64, 0.00, 0.00, 0.01, 0.00, 0.26, 0.01, 0.04, 0.00, 0.00, 0.12, 0.00, 0.01, 0.03, 0.02, 0.01, 165.03, 0.00, 0.00];
    //const inputMoles = [0.08, 0.16, 2.17, 5.48, 0.00, 0.00, 0.01, 0.00, 0.25, 0.01, 0.04, 0.00, 0.00, 0.12, 0.00, 0.01, 0.03, 0.02, 0.01, 158.73, 0.00, 0.00]
    var newVar = 0;
    //let newVar: (number)[] = []
    //let est_T = calculate_T_BubDew_Est(dewBubDataSet, inputMoles, pBara, "bub", false,[[-500],[-500]],[-500],-500)
    //let newVar: (number)[] = [25*Math.pow(10, -5), 500, 25.0001*Math.pow(10, -5)]
    //console.log(inRange(newVar[0],newVar[1],newVar[2],))
    //newVar = vaporCv(dataRange, tempC, pBara, inputMoles, UseBinaries, 0, 0, Decomp, ErrorMsgOn)
    //console.log(newVar)
    //let myDerivatives: (number)[][] = []
    //newVar = PhaseZ(dataRange, tempC, pBara, inputMoles,  Phase, UseBinaries, 0, 0, Decomp, myErrorMsg)
    newVar = eosCode_1.Volume(dataRange, 150, pBara, inputMoles, Phase, false, 0, 0, Decomp);
    console.log(newVar);
}
catch (myErrorHandler) {
    console.log(myErrorHandler);
}
//    let calculated_Z: number = PhaseZ(dataRange, tempC, pBara, inputMoles, phase, UseBinaries, 0 ,0 , Decomp)
//    console.log(calculated_Z)
//# sourceMappingURL=app.js.map