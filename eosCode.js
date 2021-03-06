"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findCubicRoots_js_1 = require("./findCubicRoots.js");
var Math = require("mathjs");
/* This code was developed in VSCode and can be found here : https://github.com/stevecalderone/PPR1978_Typescript */
var idx;
(function (idx) {
    idx[idx["mw"] = 0] = "mw";
    idx[idx["tc"] = 1] = "tc";
    idx[idx["pc"] = 2] = "pc";
    idx[idx["omega"] = 3] = "omega";
    idx[idx["zc"] = 4] = "zc";
    idx[idx["ki"] = 5] = "ki";
    idx[idx["bi"] = 6] = "bi";
    idx[idx["tb"] = 7] = "tb";
    idx[idx["hvap"] = 8] = "hvap";
    idx[idx["hf298"] = 9] = "hf298";
    idx[idx["s298"] = 10] = "s298";
    idx[idx["gf298"] = 11] = "gf298";
    idx[idx["cpData"] = 12] = "cpData";
    idx[idx["NIST_TMN1"] = 13] = "NIST_TMN1";
    idx[idx["NIST_TMX1"] = 14] = "NIST_TMX1";
    idx[idx["NIST_A1"] = 15] = "NIST_A1";
    idx[idx["NIST_B1"] = 16] = "NIST_B1";
    idx[idx["NIST_C1"] = 17] = "NIST_C1";
    idx[idx["NIST_D1"] = 18] = "NIST_D1";
    idx[idx["NIST_E1"] = 19] = "NIST_E1";
    idx[idx["NIST_F1"] = 20] = "NIST_F1";
    idx[idx["NIST_G1"] = 21] = "NIST_G1";
    idx[idx["NIST_H1"] = 22] = "NIST_H1";
    idx[idx["NIST_TMN2"] = 23] = "NIST_TMN2";
    idx[idx["NIST_TMX2"] = 24] = "NIST_TMX2";
    idx[idx["NIST_A2"] = 25] = "NIST_A2";
    idx[idx["NIST_B2"] = 26] = "NIST_B2";
    idx[idx["NIST_C2"] = 27] = "NIST_C2";
    idx[idx["NIST_D2"] = 28] = "NIST_D2";
    idx[idx["NIST_E2"] = 29] = "NIST_E2";
    idx[idx["NIST_F2"] = 30] = "NIST_F2";
    idx[idx["NIST_G2"] = 31] = "NIST_G2";
    idx[idx["NIST_H2"] = 32] = "NIST_H2";
    idx[idx["NIST_TMN3"] = 33] = "NIST_TMN3";
    idx[idx["NIST_TMX3"] = 34] = "NIST_TMX3";
    idx[idx["NIST_A3"] = 35] = "NIST_A3";
    idx[idx["NIST_B3"] = 36] = "NIST_B3";
    idx[idx["NIST_C3"] = 37] = "NIST_C3";
    idx[idx["NIST_D3"] = 38] = "NIST_D3";
    idx[idx["NIST_E3"] = 39] = "NIST_E3";
    idx[idx["NIST_F3"] = 40] = "NIST_F3";
    idx[idx["NIST_G3"] = 41] = "NIST_G3";
    idx[idx["NIST_H3"] = 42] = "NIST_H3";
    idx[idx["NIST_TMN4"] = 43] = "NIST_TMN4";
    idx[idx["NIST_TMX4"] = 44] = "NIST_TMX4";
    idx[idx["NIST_A4"] = 45] = "NIST_A4";
    idx[idx["NIST_B4"] = 46] = "NIST_B4";
    idx[idx["NIST_C4"] = 47] = "NIST_C4";
    idx[idx["NIST_D4"] = 48] = "NIST_D4";
    idx[idx["NIST_E4"] = 49] = "NIST_E4";
    idx[idx["NIST_F4"] = 50] = "NIST_F4";
    idx[idx["NIST_G4"] = 51] = "NIST_G4";
    idx[idx["NIST_H4"] = 52] = "NIST_H4";
    idx[idx["NIST_TMN5"] = 53] = "NIST_TMN5";
    idx[idx["NIST_TMX5"] = 54] = "NIST_TMX5";
    idx[idx["NIST_A5"] = 55] = "NIST_A5";
    idx[idx["NIST_B5"] = 56] = "NIST_B5";
    idx[idx["NIST_C5"] = 57] = "NIST_C5";
    idx[idx["NIST_D5"] = 58] = "NIST_D5";
    idx[idx["NIST_E5"] = 59] = "NIST_E5";
    idx[idx["NIST_F5"] = 60] = "NIST_F5";
    idx[idx["NIST_G5"] = 61] = "NIST_G5";
    idx[idx["NIST_H5"] = 62] = "NIST_H5";
    idx[idx["NIST_TMN6"] = 63] = "NIST_TMN6";
    idx[idx["NIST_TMX6"] = 64] = "NIST_TMX6";
    idx[idx["NIST_A6"] = 65] = "NIST_A6";
    idx[idx["NIST_B6"] = 66] = "NIST_B6";
    idx[idx["NIST_C6"] = 67] = "NIST_C6";
    idx[idx["NIST_D6"] = 68] = "NIST_D6";
    idx[idx["NIST_E6"] = 69] = "NIST_E6";
    idx[idx["NIST_F6"] = 70] = "NIST_F6";
    idx[idx["NIST_G6"] = 71] = "NIST_G6";
    idx[idx["NIST_H6"] = 72] = "NIST_H6";
    idx[idx["alphaType"] = 73] = "alphaType";
    idx[idx["errMsgsOn"] = 74] = "errMsgsOn";
    idx[idx["liquidsFound"] = 75] = "liquidsFound";
    idx[idx["liquidIndex"] = 76] = "liquidIndex";
    idx[idx["iSpecies"] = 77] = "iSpecies";
    idx[idx["globalErrmsg"] = 78] = "globalErrmsg";
    idx[idx["localWarnings"] = 79] = "localWarnings";
    idx[idx["binariesUsed"] = 80] = "binariesUsed";
    idx[idx["predictive"] = 81] = "predictive";
    idx[idx["finalIndex"] = 82] = "finalIndex";
    idx[idx["lastCpIndex"] = 72] = "lastCpIndex";
    idx[idx["iMoles"] = 0] = "iMoles";
    idx[idx["iMoleFraction"] = 1] = "iMoleFraction";
    idx[idx["tempK"] = 0] = "tempK";
    idx[idx["Vap298"] = 1] = "Vap298";
    idx[idx["NBPVap"] = 2] = "NBPVap";
    idx[idx["NBPLiq"] = 3] = "NBPLiq";
    idx[idx["dadT_constV"] = 0] = "dadT_constV";
    idx[idx["dPdv_constT"] = 1] = "dPdv_constT";
    idx[idx["dPdT_constV"] = 2] = "dPdT_constV";
    idx[idx["dadT_constP"] = 3] = "dadT_constP";
    idx[idx["dBdT_constP"] = 4] = "dBdT_constP";
    idx[idx["dZdT_constP"] = 5] = "dZdT_constP";
    idx[idx["dVdT_constP"] = 6] = "dVdT_constP";
    idx[idx["sumb"] = 7] = "sumb";
    idx[idx["suma"] = 8] = "suma";
    idx[idx["a"] = 9] = "a";
    idx[idx["b"] = 10] = "b";
    idx[idx["Z"] = 11] = "Z";
    idx[idx["vol"] = 12] = "vol";
    idx[idx["T"] = 0] = "T";
    idx[idx["P"] = 1] = "P";
    idx[idx["phase"] = 2] = "phase";
    idx[idx["binariesOn"] = 3] = "binariesOn";
    idx[idx["errsOn"] = 4] = "errsOn";
    idx[idx["validBinaries"] = 5] = "validBinaries";
    idx[idx["guessT"] = 6] = "guessT";
    idx[idx["valuesArray"] = 0] = "valuesArray";
    idx[idx["datasetArray"] = 1] = "datasetArray";
    idx[idx["moleCompArray"] = 2] = "moleCompArray";
    idx[idx["kij0Array"] = 3] = "kij0Array";
    idx[idx["kijTArray"] = 4] = "kijTArray";
    idx[idx["decompArray"] = 5] = "decompArray";
    idx[idx["alphaArray"] = 6] = "alphaArray";
    idx[idx["aiArray"] = 7] = "aiArray";
})(idx || (idx = {}));
;
var gasLawR = 0.000083144621; //  m3-bar/K-mol
var currentNumberOfGroups = 31; /*"Groups","CH3","CH2","CH","C","CH4","C2H6","CHaro","Caro","C, aro-fused rings","CH2, cyclic","CH/C, cyclic","CO2","N2","H2S","SH","H2O","C2H4","CH2/CH, alkenic","C, alkenic","CH/C, cycloalkenic","H2","CO","He","Ar","SO2","O2","NO","COS","NH3","NO2/N2O4","N2O"],*/
/*"Groups","(GROUP 1)","(GROUP 2)","(GROUP 3)","(GROUP 4)","(GROUP 5)","(GROUP 6)","(GROUP 7)","(GROUP 8)","(GROUP 9)","(GROUP 10)","(GROUP 11)","(GROUP 12)","(GROUP 13)","(GROUP 14)","(GROUP 15)","(GROUP 16)","(GROUP 17)","(GROUP 18)","(GROUP 19)","(GROUP 20)","(GROUP 21)","(GROUP 22)","(GROUP 23)","(GROUP 24)","(GROUP 25)","(GROUP 26)","(GROUP 27)","(GROUP 28)","(GROUP 29)","(GROUP 30)","(GROUP 31)"*/
/***********************************************************************************************/
function create_alphaiArray(dataSet, tempK) {
    var fcnName = "create_alphaiArray";
    try {
        /*'***************************************************************************
        'The function is called by all PR1978 functions
        'Calculates an array of values. If the dataSet range contains 'Twu alpha' in cell (1,1) then
        'the Twu volume translation method is used otherwise it calculates normally
        '***************************************************************************/
        var outputArray = [];
        var myErrorMsg = "";
        if (dataSet[0][idx.alphaType] === false) { //'<= alphaType is a variable created in the validateDataset function. Set in the (0,0) index of the dataSet
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                if (dataSet[i][idx.tc] !== 0) {
                    outputArray.push(Math.pow(1 + dataSet[i][idx.ki] * (1 - Math.pow(tempK / dataSet[i][idx.tc], 0.5)), 2));
                }
                else {
                    myErrorMsg = "The critical temperature of species " + i + " is zero.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
        }
        else {
            var alpha0 = 0;
            var alpha1 = 0;
            var Tr = 0; //'<= Twu type alpha is being used - cell (1,1) of dataSet contains the value' Twu_alpha' 
            var LMN_Array = [
                [0.272838, 0.625701, 0.373949, 0.0239035],
                [0.924779, 0.792014, 4.7302, 1.24615],
                [1.19764, 2.46022, -0.2, -8]
            ];
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                Tr = tempK / dataSet[i][idx.tc];
                if (Tr <= 1) {
                    alpha0 = Math.pow(Tr, (1.19764 * (0.924779 - 1))) * Math.exp(0.272838 * (1 - Math.pow(Tr, (1.19764 * 0.924779))));
                    alpha1 = Math.pow(Tr, (2.46022 * (0.792014 - 1))) * Math.exp(0.625701 * (1 - Math.pow(Tr, (2.46022 * 0.792014))));
                }
                else {
                    alpha0 = Math.pow(Tr, (1.19764 * (0.924779 - 1))) * Math.exp(0.272838 * (1 - Math.pow(Tr, (1.19764 * 0.924779))));
                    alpha1 = Math.pow(Tr, (2.46022 * (0.792014 - 1))) * Math.exp(0.625701 * (1 - Math.pow(Tr, (2.46022 * 0.792014))));
                }
                outputArray.push(alpha0 + dataSet[i][idx.omega] * (alpha1 - alpha0));
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [-500];
    }
}
/****************************************************************************************************/
function create_aiArray(dataSet, alpha_aiArray) {
    var fcnName = "create_aiArray";
    try {
        /*'***************************************************************************
        'The function is called by all PR1978 functions
        'Calculates an array of values
        '***************************************************************************/
        var outputArray = [];
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray.push(0);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (dataSet[i][idx.pc] > 0 && dataSet[i][idx.pc] !== 0) {
                outputArray[i] = 0.457235529 * alpha_aiArray[i] * Math.pow((gasLawR * dataSet[i][idx.tc]), 2) / dataSet[i][idx.pc];
            }
            else {
                myErrorMsg = "The critical pressure of species " + i + " is less than or equal to zero";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [-500];
    }
}
/*************************************************************************************/
function create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK) {
    var fcnName = "create_aijArray";
    try {
        /*'***************************************************************************
        'The function is called by all of the PR1978 functions
        'Calculates an array of values
        '***************************************************************************/
        var outputArray = [];
        var myErrorMsg = void 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray.push([]);
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                if (binariesUsed === true) {
                    outputArray[i].push(Math.pow(aiArray[i] * aiArray[j], 0.5) * (1 - binaries[i][j]));
                }
                else {
                    outputArray[i].push(Math.pow(aiArray[i] * aiArray[j], 0.5));
                }
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [[-500, -500], [-500, -500]];
    }
}
/********************************************************************************************************************* */
function create_xi_aijArray(dataSet, aij_Array, molarComp) {
    var fcnName = "create_xi_aijArray";
    try {
        /*'***************************************************************************
        'The function is called by calculate_Phi function
        'Calculates an array of values
        '***************************************************************************/
        var xj_aijArray = [];
        var Aij = [];
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            Aij.push([]);
            xj_aijArray[i] = 0;
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                Aij[i].push(molarComp[j] * aij_Array[i][j]);
                xj_aijArray[i] = Aij[i][j] + xj_aijArray[i];
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return xj_aijArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [-500];
    }
}
/*************************************************************************************************** */
function calculate_dadt(dataSet, tempK, moleComp, aij_Array, alpha_aiArray) {
    var fcnName = "calculate_dadt";
    try {
        /***************************************************************************
        'This function is called by the Enthalpy, Entropy and Derivatives function
        'This function calculates the PR1978 EOS da/dT
        '***************************************************************************/
        var dadt_Array = [];
        var myErrorMsg = "";
        var dadT = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            dadt_Array.push([]);
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                dadt_Array[i][j] = -(moleComp[i] * moleComp[j] * aij_Array[i][j] / (2 * Math.pow(tempK, 0.5))) * ((dataSet[j][idx.ki] / (Math.pow(alpha_aiArray[j] * dataSet[j][idx.tc], 0.5))) + dataSet[i][idx.ki] / Math.pow(alpha_aiArray[i] * dataSet[i][idx.tc], 0.5));
                if (dadt_Array[i][j] === Infinity) {
                    myErrorMsg = "(alpha_aiArray(i or j) * dataSet(i or j, iColumns.tc)) ^ 0.5 = 0. Divide by zero error.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                dadT = dadT + dadt_Array[i][j];
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return dadT;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return -500;
    }
}
/****************************************************************************** */
/**
 *
 * Calculates constant pressure heat capacity (j/mol/K) given T (C), P (pbara), mole amounts, phase (vapor or liquid) and a dataSet.
 */
function phaseCp(dataRange, temperature, pressure, moles, inputPhase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var CpIG = 0;
        var CvResidual = 0;
        var CpResidual = 0;
        var d2adT2 = 0;
        var myErrorMsg = "";
        var derivatives = [];
        var CpRanges = [];
        var d2aidT2Array = [];
        var daidTArray = [];
        var outputArray = [];
        var binaries = [];
        var inputDataArray = [];
        var fcnName = "phaseCp";
        inputDataArray = validateData(dataRange, temperature, pressure, moles, inputPhase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, true);
        var errorTest = inputDataArray[0][0];
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        if (dataSet[0][idx.globalErrmsg] !== "") {
            myErrorMsg = dataSet[0].toString();
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        CpRanges = selectCpDataRanges(dataSet, tempK, phase);
        CpIG = calculate_Cp_IGorLiquid(dataSet, moleComp, tempK, CpRanges, phase);
        if (phase === "liquid") {
            outputArray.push(CpIG);
        }
        else {
            if (phase === "vapor" && pBara <= 1) {
                outputArray.push(CpIG);
                outputArray.push(CpIG);
                outputArray.push(0);
            }
            else {
                if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
                if (binariesUsed) {
                    if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                        binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                        if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                        }
                    }
                    binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                }
                derivatives = calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries);
                if (derivatives[0] !== 987654321.12345) {
                    CpRanges = selectCpDataRanges(dataSet, tempK, phase);
                    d2aidT2Array = create_d2aidT2Array(dataSet, tempK);
                    daidTArray = create_daidTArray(dataSet, aiArray, tempK);
                    d2adT2 = calculate_d2adT2(dataSet, tempK, moleComp, aiArray, daidTArray, d2aidT2Array, binariesUsed, binaries);
                    if ((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5))) <= 0) {
                        myErrorMsg = "The natural log term in the Cv residual equation retun an error. Check phase.";
                        throw new Error(fcnName + ": " + myErrorMsg);
                    }
                    if (derivatives[idx.sumb] <= 0) {
                        myErrorMsg = "The term sum_b is less than or equal to zero. Check phase.";
                        throw new Error(fcnName + ": " + myErrorMsg);
                    }
                    CvResidual = 100000 * tempK * d2adT2 * Math.log((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5)))) / (derivatives[idx.sumb] * Math.pow(8, 0.5));
                    CpResidual = CvResidual + (tempK * (derivatives[idx.dPdT_constV]) * derivatives[idx.dVdT_constP] - gasLawR) * 100000;
                    outputArray[0] = CpIG + CpResidual;
                    outputArray[1] = CpIG;
                    outputArray[2] = CpResidual;
                }
                else {
                    myErrorMsg = "Calculate_Derivatives returned an error.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
        }
        if (myErrorMsg = "") {
            myErrorMsg = dataSet[0][idx.globalErrmsg];
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.phaseCp = phaseCp;
/****************************************************************** */
function create_d2aidT2Array(dataSet, tempK) {
    var fcnName = "create_d2aidT2Array";
    try {
        /*'***************************************************************************
        'The function is called directly of indirectly by vaporCv, PhaseCp, Derivatives, SpeedOfSound and JTCoef
        'Calculates an array of values
        '***************************************************************************/
        var outputArray = [];
        var myErrorMsg = "";
        var tempValue = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            tempValue = (0.45724 * (Math.pow(gasLawR * (dataSet[i][idx.tc]), 2) / (dataSet[i][idx.pc]))) * dataSet[i][idx.ki];
            tempValue = tempValue * Math.pow(dataSet[i][idx.tc] / tempK, 0.5) * (1 + dataSet[i][idx.ki]);
            tempValue = tempValue / (2 * tempK * dataSet[i][idx.tc]);
            outputArray.push(tempValue);
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [-500];
    }
}
/******************************************************************************************/
function create_daidTArray(dataSet, aiArray, tempK) {
    var fcnName = "create_daidTArray";
    try {
        /***************************************************************************
        'The function is called directly of indirectly by vaporCv, PhaseCp, Derivatives, SpeedOfSound and JTCoef
        'Calculates an array of values
        '***************************************************************************/
        var outputArray = [];
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray.push(-dataSet[i][idx.ki] * aiArray[i] / ((1 + dataSet[i][idx.ki] * (1 - Math.pow(tempK / dataSet[i][idx.tc], 0.5))) * Math.pow(tempK * dataSet[i][idx.tc], 0.5)));
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [-500];
    }
}
/*********************************************************************************************************************/
function calculate_sum_a(dataSet, aij_Array, molarComp) {
    var fcnName = "calculate_sum_a";
    try {
        /*'***************************************************************************
        'The function is called by all of the PR1978 functions
        'Calculates sum(ai) (see reference 1) from PR1978 EOS
        '****************************************************************************/
        var sum_a = 0;
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                sum_a = sum_a + aij_Array[i][j] * molarComp[i] * molarComp[j];
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return sum_a;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return -500;
    }
}
/**************************************************************************/
function calculate_sum_b(dataSet, molarComp) {
    var fcnName = "calculate_sum_b";
    try {
        /*'***************************************************************************
        'The function is called by all of the PR1978 functions
        'Calculates sum(bi) (see reference 1) from PR1978 EOS
        '***************************************************************************/
        var sum_b = 0;
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            sum_b = sum_b + dataSet[i][idx.bi] * molarComp[i];
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return sum_b;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return -500;
    }
}
/**************************************************************************************/
function calculate_A(dataSet, sum_a, tempK, pbara) {
    var fcnName = "calculate_A";
    try {
        /*'***************************************************************************
        'The function is called by all of the PR1978 functions
        'Calculates A (see reference 1) from PR1978 EOS
        '***************************************************************************/
        var myErrorMsg = "";
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return sum_a * pbara / Math.pow((gasLawR * tempK), 2);
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return -500;
    }
}
/*******************************************************************************/
function calculate_B(dataSet, sum_b, tempK, pbara) {
    var fcnName = "calculate_B";
    try {
        /*'***************************************************************************
        'The function is called by the 'CreateDataset' function
        'Calculates B (see reference 1) from PR1978 EOS
        '***************************************************************************/
        var myErrorMsg = "";
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function      
        return sum_b * pbara / (gasLawR * tempK);
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return -500;
    }
}
/***********************************************************************************************/
function validateBinariyArrays(dataSet, kij0, kijT, decomposition) {
    try {
        var myErrorMsg = "";
        var fcnName = "validateBinariyArrays";
        var testSum = 0;
        var decompTest = 0;
        var decompArray = [];
        if (dataSet[0][idx.predictive] === true && !decomposition && decomposition[0][0] !== -500) {
            dataSet[0][idx.globalErrmsg] = fcnName + ": Predictive and binariesUsed parameters equal true but no decomposition is provided.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        else {
            if (decomposition.length !== dataSet[0][idx.iSpecies] + 1) {
                dataSet[0][idx.globalErrmsg] = fcnName + ": The supplied decomposition row count must equal the number of species plus one for the header row. Correct decomposition.";
                return [false];
            }
            else {
                for (var i = 1; i < decomposition.length; i++) {
                    if (decomposition[i].length !== currentNumberOfGroups + 1) {
                        dataSet[0][idx.globalErrmsg] = fcnName + ": The column count for species " + i + " does not equal equal 32 (31 groups plus 1 for the species name). Correct decomposition.";
                        return [false];
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    decompArray.push([]);
                    for (var j = 0; j < currentNumberOfGroups; j++) {
                        decompArray[i].push(decomposition[i + 1][j + 1]);
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    for (var j = 0; j < currentNumberOfGroups; j++) {
                        testSum = testSum + decompArray[i][j];
                    }
                    if (testSum === 0) {
                        decompTest = decompTest + 1;
                    }
                    else if (testSum - 1 < Math.pow(10, -5)) {
                        decompTest = decompTest + 1;
                    }
                    else {
                        dataSet[0][idx.globalErrmsg] = fcnName + ": The decomposition for species " + i + " does not equal either zero or 1. Correct decomposition.";
                        return [false];
                    }
                    testSum = 0;
                }
            }
        }
        if (dataSet[0][idx.predictive] === false) {
            if (dataSet[0][idx.binariesUsed] && !kij0) {
                dataSet[0][idx.globalErrmsg] = fcnName + ": The parameter binariesUsed equals true but no binaries are provided.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            else {
                if (kij0.length !== dataSet[0][idx.iSpecies] && kij0[0].length !== dataSet[0][idx.iSpecies]) {
                    dataSet[0][idx.globalErrmsg] = fcnName + ": kij0 binaries must be an array of size equal to the number of species by the number of species.";
                    return [false];
                }
                testSum = 0;
                if (!dataSet[0][idx.predictive] && kij0) {
                    for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                        for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                            testSum = testSum + kij0[i][j] - kij0[j][i];
                        }
                    }
                    if (testSum !== 0) {
                        dataSet[0][idx.globalErrmsg] = fcnName + ": kij0 binaries are not symetrical. The condition Kij0(i,j) = Kij0(j,i) must be true.";
                        return [false];
                    }
                }
            }
            if (dataSet[0][idx.predictive] === false && !kijT && kij0.length !== dataSet[0][idx.iSpecies] + 1 && kij0[0].length !== dataSet[0][idx.iSpecies] + 1) {
                dataSet[0][idx.globalErrmsg] = fcnName + ": The parameter binariesUsed equals true but no binaries are provided.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            else {
                if (kijT.length !== dataSet[0][idx.iSpecies] && kijT[0].length !== dataSet[0][idx.iSpecies]) {
                    dataSet[0][idx.globalErrmsg] = fcnName + ": kijT binaries must be an array of size equal to the number of species by the number of species.";
                    return [false];
                }
                testSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                        testSum = testSum + kijT[i][j] - kijT[j][i];
                    }
                }
                if (testSum !== 0) {
                    dataSet[0][idx.globalErrmsg] = fcnName + ": Warning: kijT binaries are imbalanced. The condition KijT(i,j) = KijT(j,i) must be true.";
                    return [false];
                }
            }
        }
        return [true, kij0, kijT, decompArray];
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return [false];
    }
}
/****************************************************************************************/
function calculate_binaries(dataSet, tempK, kij0, kijT, passed_aiArray, deComp) {
    try {
        var myErrorMsg = "";
        var errorSum = 0;
        var fcnName = "calculate_binaries";
        var passedTempK = 0;
        var alpha_iArray = [];
        var aiArray = [];
        var binaries = [];
        if (dataSet[0][idx.predictive] === false && !kij0) {
            dataSet[0][idx.globalErrmsg] = "The parameter binariesUsed equals true but kij0 is not provided.";
            binaries = [[-500], [-500]];
            return binaries;
        }
        else if (dataSet[0][idx.predictive] === false && kij0) {
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                    errorSum = errorSum + kij0[i][j] - kij0[j][i];
                }
            }
            if (errorSum !== 0) {
                myErrorMsg = fcnName + ": kij0 binaries are imbalanced. The condition Kij0(i,j) = Kij0(j,i) and kij0(i,i) = 0 must be true.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            if (kijT) {
                errorSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                        errorSum = errorSum + kijT[i][j] - kijT[j][i];
                    }
                }
                if (errorSum !== 0) {
                    myErrorMsg = fcnName + ": kijT binaries are imbalanced. The condition KijT(i,j) = KijT(j,i) must be true.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
            if (kij0.length - 1 === dataSet[0][idx.iSpecies] && kij0[0].length - 1 === dataSet[0][idx.iSpecies]) {
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    binaries.push([]);
                    for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                        if (kijT) {
                            binaries[i].push(kij0[i][j] + tempK * kijT[i][j]);
                        }
                        else {
                            binaries[i].push(kij0[i][j]);
                        }
                    }
                }
            }
            else {
                myErrorMsg = fcnName + ": Binary array must be a two dimensional array with each dimension equal to the number of species.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        if (dataSet[0][idx.predictive] && !deComp) {
            dataSet[0][idx.globalErrmsg] = fcnName + ": binariesUsed equals true but no decomposition is provided.";
            binaries = [[-500], [-500]];
        }
        else {
            passedTempK = tempK;
            if (!passed_aiArray) {
                alpha_iArray = create_alphaiArray(dataSet, passedTempK);
                aiArray = create_aiArray(dataSet, alpha_iArray);
            }
            else {
                aiArray = passed_aiArray.slice(0);
            }
            binaries = createPredictiveBinaries(dataSet, deComp, passedTempK, aiArray);
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function   
        return binaries;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return [[-500], [-500]];
    }
}
/******************************************************************** */
function createPredictiveBinaries(dataSet, deComp, tempK, aiArray) {
    var fcnName = "createPredictiveBinaries";
    try {
        var array_1to17 = [];
        var array_18to31 = [];
        var grpInteractionParamA = [];
        var grpInteractionParamB = [];
        var DoubleSum = [];
        var binaries = [];
        var myErrorMsg = "";
        var currentNumberOfGroups_1 = 31; // as of 2017, includes O2, SO2 and NO groups
        grpInteractionParamA = initial2D_Array(currentNumberOfGroups_1, currentNumberOfGroups_1);
        grpInteractionParamB = initial2D_Array(currentNumberOfGroups_1, currentNumberOfGroups_1);
        DoubleSum = initial2D_Array(dataSet[0][idx.iSpecies], dataSet[0][idx.iSpecies]);
        binaries = initial2D_Array(dataSet[0][idx.iSpecies], dataSet[0][idx.iSpecies]);
        if (deComp.length !== dataSet[0][idx.iSpecies] || deComp[1].length !== currentNumberOfGroups_1) {
            myErrorMsg = "The supplied decomposition range row count must equal the number of species and the column count must equal 31 groups plus 1 for the species column.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        array_1to17 = [
            [0, 65.54, 214.9, 431.6, 28.48, 3.775, 98.83, 103.6, 624.9, 43.58, 293.4, 144.8, 38.09, 159.6, 789.6, 3557, 7.892, 48.73, 102.6, 47.01, 174, 91.24, 416.3, 11.27, 322.2, 86.1, 0, 0, 0, 0, 0],
            [65.54, 0, 39.05, 134.5, 37.75, 29.85, 25.05, 5.147, -17.84, 8.579, 63.48, 141.4, 83.73, 136.6, 439.9, 4324, 59.71, 9.608, 64.85, 34.31, 155.4, 44, 520.52, 113.6, 55.9, 107.4, 0, 0, 0, 0, 0],
            [214.9, 39.05, 0, -86.13, 131.4, 156.1, 56.62, 48.73, 0, 73.09, -120.8, 191.8, 383.6, 192.5, 374, 971.4, 147.9, 84.76, 91.62, 0, 326, 0, 728.1, 185.8, -70, 0, 0, 0, 0, 0, 0],
            [431.6, 134.5, -86.13, 0, 309.5, 388.1, 170.5, 128.3, 0, 208.6, 25.05, 377.5, 341.8, 330.8, 685.9, 0, 366.8, 181.2, 0, 0, 548.3, 0, 0, 899, 0, 0, 0, 0, 0, 0, 0],
            [28.48, 37.75, 131.4, 309.5, 0, 0, 9.951, 67.26, 106.7, 249.1, 33.97, 188, 136.57, 30.88, 190.1, 701.7, 2277.12, 19.22, 48.73, 0, 0, 156.1, 14.43, 394.5, 15.97, 205.89, 0, 0, 44.61, 436.14, 0],
            [3.775, 29.85, 156.1, 388.1, 9.951, 0, 41.18, 67.94, 0, 12.7, 118, 136.2, 61.59, 157.2, 0, 2333, 7.549, 26.77, 0, 0, 137.6, 15.42, 581.3, 43.81, 0, 0, 0, 0, 0, 0, 0],
            [98.83, 25.05, 56.62, 170.5, 67.26, 41.18, 0, -16.47, 52.5, 28.82, 129, 98.48, 185.3, 21.28, 277.6, 2268, 25.74, 9.951, -16.47, 3.775, 288.9, 153.4, 753.6, 195.6, 37.1, 233.4, 0, 0, 0, 0, 0],
            [103.6, 5.147, 48.73, 128.3, 106.7, 67.94, -16.47, 0, -328, 37.4, -99.17, 154.4, 343.8, 9.608, 1002, 543.5, 97.8, -48.38, 343.1, 242.9, 400.1, 125.77, 753.6, 0, -196.6, 177.1, 0, 0, 0, 0, 0],
            [624.9, -17.84, 0, 0, 249.1, 0, 52.5, -328, 0, 140.7, -99.17, 331.1, 702.4, 9.608, 1002, 1340, 209.7, 669.8, 0, 0, 602.9, 197, 753.6, 0, 0, 0, 0, 0, 0, 0, 0],
            [43.58, 8.579, 73.09, 208.6, 33.97, 12.7, 28.82, 37.4, 140.7, 0, 139, 144.1, 179.5, 117.4, 493.1, 4211, 35.34, -15.44, 159.6, 31.91, 236.1, 113.1, 0, 1269, 0, 181.2, -27.5, 0, 0, 0, 0],
            [293.4, 63.48, -120.8, 25.05, 188, 118, 129, -99.17, -99.17, 139, 0, 216.2, 331.5, 71.37, 463.2, 244, 297.2, 260.1, 0, 151.3, -51.82, 0, 0, 0, 0, 102.3, 0, 0, 0, 0, 0],
            [144.8, 141.4, 191.8, 377.5, 136.57, 136.2, 98.48, 154.4, 331.1, 144.1, 216.2, 0, 113.92, 135.2, 0, 559.3, 73.09, 60.74, 74.81, 87.85, 261.13, 87.85, 685.9, 177.75, 54.9, 154.42, 5.1, 83.04, 0, 124.91, 3.77],
            [38.09, 83.73, 383.6, 341.8, 30.88, 61.59, 185.3, 343.8, 702.4, 179.5, 331.5, 113.92, 0, 319.5, 0, 2574, 45.3, 59.71, 541.5, 0, 65.2, 23.33, 204.7, 6.488, 282.4, 2.4, 258.73, 0, 585.75, 263.54, 101.57],
            [159.6, 136.6, 192.5, 330.8, 190.1, 157.2, 21.28, 9.608, 9.608, 117.4, 71.37, 135.2, 319.5, 0, 0, -157, 603.94, 0, 0, 0, 0, 145.84, 278.63, 0, 0, 0, 0, 0, 101.91, 0, 0],
            [789.6, 439.9, 374, 685.9, 701.7, 0, 277.6, 1002, 1002, 493.1, 463.2, 0, 0, -157, 0, 30.88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [3557, 4324, 971.4, 0, 2277.12, 2333, 2268, 543.5, 1340, 4211, 244, 559.3, 2574, 603.94, 30.88, 0, 1650, 2243, 0, 0, 830.76, 278.63, 0, 0, 374.4, 1376, 0, 0, -550.06, 0, 568.94],
            [7.892, 59.71, 147.9, 366.8, 19.22, 7.549, 25.74, 97.8, 209.7, 35.34, 297.2, 73.09, 45.3, 0, 0, 1650, 0, 14.76, -518, -98.8, 151.3, 84.55, 569.6, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        array_18to31 = [
            [48.73, 9.608, 84.76, 181.2, 48.73, 26.77, 9.951, -48.38, 669.8, -15.44, 260.1, 60.74, 59.71, 0, 0, 2243, 14.76, 0, 24.71, 14.07, 175.7, 0, 644.3, 203, 26.8, 0, 0, 0, 0, 0, 0],
            [102.6, 64.85, 91.62, 0, 0, 0, -16.47, 343.1, 0, 159.6, 0, 74.81, 541.5, 0, 0, 0, -518, 24.71, 0, 23.68, 621.4, 0, 0, 0, -141, 0, 0, 0, 0, 0, 0],
            [47.01, 34.31, 0, 0, 0, 0, 3.775, 242.9, 0, 31.91, 151.3, 87.85, 0, 0, 0, 0, -98.8, 14.07, 23.68, 0, 460.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [174, 155.4, 326, 548.3, 156.1, 137.6, 288.9, 400.1, 602.9, 236.1, -51.82, 261.13, 65.2, 145.84, 0, 830.76, 151.3, 175.7, 621.4, 460.8, 0, 75.84, 138.7, 128.2, 0, 0, 0, 0, 701.73, 0, 0],
            [91.24, 44, 0, 0, 14.43, 15.42, 153.4, 125.77, 197, 113.1, 0, 87.85, 23.33, 278.63, 0, 278.63, 84.55, 0, 0, 0, 75.84, 0, 260.1, 4.042, 0, 0, 309.17, 0, 0, 0, 0],
            [416.3, 520.52, 728.1, 0, 394.5, 581.3, 753.6, 753.6, 753.6, 0, 0, 685.9, 204.7, 0, 0, 0, 569.6, 644.3, 0, 0, 138.7, 260.1, 0, 243.1, 0, 0, 0, 0, 0, 0, 0],
            [11.27, 113.6, 185.8, 899, 15.97, 43.81, 195.6, 0, 0, 1269, 0, 177.75, 6.488, 0, 0, 0, 0, 203, 0, 0, 128.2, 4.042, 243.1, 0, 299.91, 4.8, 110.84, 0, 630.02, 278.63, 0],
            [322.2, 55.9, -70, 0, 205.89, 0, 37.1, -196.6, 0, 0, 0, 54.9, 282.4, 0, 0, 374.4, 0, 26.8, -141, 0, 0, 0, 0, 299.91, 0, 0, 339.94, 172.26, 0, 0, 0],
            [86.1, 107.4, 0, 0, 0, 0, 233.4, 177.1, 0, 181.2, 102.3, 154.42, 2.4, 0, 0, 1376, 0, 0, 0, 0, 0, 0, 0, 4.8, 339.94, 0, 0, 0, 0, 271.09, 120.1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, -27.5, 0, 5.1, 258.73, 0, 0, 0, 0, 0, 0, 0, 0, 309.17, 0, 110.84, 172.26, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 44.61, 0, 0, 0, 0, 0, 0, 83.04, 0, 101.91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 436.14, 0, 0, 0, 0, 0, 0, 0, 585.75, 0, 0, -550.06, 0, 0, 0, 0, 701.73, 0, 0, 630.02, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124.91, 263.54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 278.63, 0, 271.09, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 74.81, 0, 0, 0, 0, 0, 0, 3.77, 101.57, 0, 0, 568.94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120.1, 0, 0, 0, 0, 0]
        ];
        for (var i = 0; i < 17; i++) {
            for (var j = 0; j < currentNumberOfGroups_1; j++) {
                grpInteractionParamA[i][j] = array_1to17[i][j] * 10; //<= Convert from MPa to bara
            }
        }
        for (var i = 0; i < 31 - 17; i++) {
            for (var j = 0; j < currentNumberOfGroups_1; j++) {
                grpInteractionParamA[i + 16][j] = array_18to31[i][j] * 10; //<= Convert from MPa to bara
            }
        }
        array_1to17 = [
            [0, 105.7, 249.9, 575, 20.25, 8.922, 136.2, 103.6, 774.1, 60.05, 170.9, 401.5, 88.19, 227.8, 1829, 11195, 35, 44.27, 260.1, 169.5, 239.5, 94.24, 513.4, 55.48, 201.4, 87.5, 0, 0, 0, 0, 0],
            [105.7, 0, 41.59, 183.9, 74.81, 65.88, 64.51, -7.549, -4.118, 27.79, -74.46, 237.1, 188.7, 124.6, 504.8, 12126, 82.35, 50.79, 51.82, 51.13, 240.9, 45.55, 673.22, 231.6, -28.5, 200.8, 0, 0, 0, 0, 0],
            [249.9, 41.59, 0, 85.1, 157.5, 96.77, 129.7, -89.22, 0, 71.37, 18.53, 380.9, 375.4, 562.8, 520.9, 567.6, -55.59, 193.2, 54.9, 0, 287.9, 0, 750.9, 634.2, 233.7, 0, 0, 0, 0, 0, 0],
            [575, 183.9, 85.1, 0, 35.69, -224.8, 284.1, 189.1, 0, 294.4, 81.33, 162.7, 635.2, -297.2, 1547, 0, -219.3, 419, 0, 0, 2343, 0, 0, 4655, 0, 0, 0, 0, 0, 0, 0],
            [20.25, 74.81, 157.5, 35.69, 0, 13.37, 167.5, 190.8, 408.3, 5.49, 473.9, 214.81, 37.06, 307.46, 1318, 4719.63, 33.29, 68.29, 0, 0, 92.99, 20.92, 378.1, 24.48, 323.59, 0, 0, -95.05, 958.75, 0, 107.06],
            [8.922, 65.88, 96.77, -224.8, 13.37, 0, 50.79, 210.7, 0, 73.43, -212.8, 235.7, 84.92, 217.1, 0, 5147, 20.93, -5.147, 0, 0, 150, 33.3, 517.1, 53.1, 0, 0, 0, 0, 0, 0, 0],
            [136.2, 64.51, 129.7, 284.1, 167.5, 50.79, 0, 16.47, 251.2, 65.54, 36.72, 253.6, 490.7, 6.177, 449.5, 62.18, 78.92, 19.9, 61.42, 1.716, 189.1, 153.4, 590.5, 361.3, -23.7, 404.9, 0, 0, 0, 0, 0],
            [103.6, -7.549, -89.22, 189.1, 190.8, 210.7, 16.47, 0, -569.3, 53.53, -193.5, 374.4, 1712, -36.72, -736.4, 411.8, 67.94, 27.79, 880.2, -7.206, 1201, -231.1, 590.5, 0, -397.4, 2559.4, 0, 0, 0, 0, 0],
            [774.1, -4.118, 0, 0, 408.3, 0, 251.2, -569.3, 0, 277.6, -193.5, 276.6, 1889, -36.72, -736.4, -65.88, 3819, 589.5, 0, 0, 1463, -238.8, 590.5, 0, 0, 0, 0, 0, 0, 0, 0],
            [60.05, 27.79, 71.37, 294.4, 5.49, 73.43, 65.54, 53.53, 277.6, 0, 35.69, 354.1, 546.6, 166.4, 832.1, 13031, 52.5, 24.36, 140.7, 69.32, 192.5, 143.6, 0, 18666, 0, 281.4, 50.1, 0, 0, 0, 0],
            [170.9, -74.46, 18.53, 81.33, 473.9, -212.8, 36.72, -193.5, -193.5, 35.69, 0, -132.8, 389.8, -127.7, -337.7, -60.39, -647.2, 134.9, 0, 2.745, 34.31, 0, 0, 0, 0, 988, 0, 0, 0, 0, 0],
            [401.5, 237.1, 380.9, 162.7, 214.81, 235.7, 253.6, 374.4, 276.6, 354.1, -132.8, 0, 212.41, 199.02, 0, 277.95, 106.7, 183.9, -266.6, 66.91, 300.94, 190.79, 559.3, 86.82, 59.02, 109.81, 48.38, 165.74, 0, 241.57, 14.07],
            [88.19, 188.7, 375.4, 635.2, 37.06, 84.92, 490.7, 1712, 1889, 546.6, 389.8, 212.41, 0, 550.06, 0, 5490.33, 92.65, 227.2, 94.71, 0, 70.1, -25.4, 222.8, 8.77, 362.71, 4.8, 100.54, 0, 1011.25, 255.99, 230.94],
            [227.8, 124.6, 562.8, -297.2, 307.46, 217.1, 6.177, -36.72, -36.72, 166.4, -127.7, 199.02, 550.06, 0, 153.7, 599.13, 0, 0, 0, 0, 823.55, 404.23, 0, 0, 0, 0, 0, 98.14, 0, 0, 0],
            [1829, 504.8, 520.9, 1547, 1318, 0, 449.5, -736.4, -736.4, 832.1, -337.7, 0, 0, 153.7, 0, -113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [11195, 12126, 567.6, 0, 4719.63, 5147, 62.18, 411.8, -65.88, 13031, -60.39, 277.95, 5490.33, 599.13, -113, 0, 1661, 5199, 0, 0, -137.94, -89.9, 0, 1211.3, 148.58, 1609.35, 0, 0, -1404.15, 0, -144.81],
            [35, 82.35, -55.59, -219.3, 33.29, 20.93, 78.92, 67.94, 3819, 52.5, -647.2, 106.7, 92.65, 0, 0, 1661, 0, 11.32, 6815, 1809, 165.1, -7.51, 536.7, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        array_18to31 = [
            [44.27, 50.79, 193.2, 419, 68.29, -5.147, 19.9, 27.79, 589.5, 24.36, 134.9, 183.9, 227.2, 0, 0, 5199, 11.32, 0, 121.8, -12.3, 373, 0, 687.7, -11.7, 26.8, 0, 0, 0, 0, 0, 0],
            [260.1, 51.82, 54.9, 0, 0, 0, 61.42, 880.2, 0, 140.7, 0, -266.6, 94.71, 0, 0, 0, 6815, 121.8, 0, 87.5, 873.6, 0, 0, 0, -151, 0, 0, 0, 0, 0, 0],
            [169.5, 51.13, 0, 0, 0, 0, 1.716, -7.206, 0, 69.32, 2.745, 66.91, 0, 0, 0, 0, 1809, -12.3, 87.5, 0, 2167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [239.5, 240.9, 287.9, 2343, 92.99, 150, 189.1, 1201, 1463, 192.5, 34.31, 300.94, 70.1, 823.55, 0, -137.94, 165.1, 373, 873.6, 2167, 0, 74.81, 95.49, 102.9, 0, 0, 0, 0, 931.3, 0, 0],
            [94.24, 45.55, 0, 0, 20.92, 33.3, 153.4, -231.1, -238.8, 143.6, 0, 190.79, -25.4, 404.23, 0, -89.9, -7.51, 0, 0, 0, 74.81, 0, 259.9, 8.18, 0, 0, 28.82, 0, 0, 0, 0],
            [513.4, 673.22, 750.9, 0, 378.1, 517.1, 590.5, 590.5, 590.5, 0, 0, 559.3, 222.8, 0, 0, 0, 536.7, 687.7, 0, 0, 95.49, 259.9, 0, 305.6, 0, 0, 0, 0, 0, 0, 0],
            [55.48, 231.6, 634.2, 4655, 24.48, 53.1, 361.3, 0, 0, 18666, 0, 86.82, 8.77, 0, 0, 1211.3, 0, -11.7, 0, 0, 102.9, 8.18, 305.6, 0, 354.13, 7.89, 155.45, 0, 1793.97, 274.52, 0],
            [201.4, -28.5, 233.7, 0, 323.59, 0, -23.7, -397.4, 0, 0, 0, 59.02, 362.71, 0, 0, 148.58, 0, 26.8, -151, 0, 0, 0, 0, 354.13, 0, 665.7, 1343, 0, 0, 0, 0],
            [87.5, 200.8, 0, 0, 0, 0, 404.9, 2559.4, 0, 281.4, 988, 109.81, 4.8, 0, 0, 1609.35, 0, 0, 0, 0, 0, 0, 0, 7.89, 665.7, 0, 0, 0, 0, 362.36, 105.69],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 50.1, 0, 48.38, 100.54, 0, 0, 0, 0, 0, 0, 0, 0, 28.82, 0, 155.45, 1343, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, -95.05, 0, 0, 0, 0, 0, 0, 165.74, 0, 98.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 958.75, 0, 0, 0, 0, 0, 0, 0, 1011.25, 0, 0, -1404.15, 0, 0, 0, 0, 931.3, 0, 0, 1793.97, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 241.57, 255.99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 274.52, 0, 362.36, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 107.06, 0, 0, 0, 0, 0, 0, 14.07, 230.94, 0, 0, -144.81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105.69, 0, 0, 0, 0, 0]
        ];
        for (var i = 0; i < 17; i++) {
            for (var j = 0; j < currentNumberOfGroups_1; j++) {
                grpInteractionParamB[i][j] = array_1to17[i][j] * 10; //<= Convert from MPa to bara
            }
        }
        for (var i = 0; i < 31 - 17; i++) {
            for (var j = 0; j < currentNumberOfGroups_1; j++) {
                grpInteractionParamB[i + 16][j] = array_18to31[i][j] * 10; //<= Convert from MPa to bara
            }
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                if (i === j) {
                    binaries[i][j] = 0;
                    binaries[j][i] = 0;
                }
                else {
                    if (j > i) {
                        for (var k = 0; k < currentNumberOfGroups_1; k++) {
                            for (var l = 0; l < currentNumberOfGroups_1; l++) {
                                if (l !== k) {
                                    if (grpInteractionParamA[k][l] !== 0 && grpInteractionParamB[k][l] !== 0) {
                                        DoubleSum[i][j] = DoubleSum[i][j] + (deComp[i][k] - deComp[j][k]) * (deComp[i][l] - deComp[j][l]) * grpInteractionParamA[k][l] * Math.pow((298.15 / tempK), ((grpInteractionParamB[k][l] / grpInteractionParamA[k][l]) - 1));
                                    }
                                }
                            }
                        }
                        if (j > i && DoubleSum[i][j] !== 0) {
                            binaries[i][j] = -(1 / 2) * DoubleSum[i][j];
                            binaries[i][j] = binaries[i][j] - Math.pow((Math.pow(aiArray[i], 1 / 2) / dataSet[i][idx.bi] - Math.pow(aiArray[j], 1 / 2) / dataSet[j][idx.bi]), 2);
                            binaries[i][j] = binaries[i][j] / (2 * Math.pow((aiArray[i] * aiArray[j]), 1 / 2) / (dataSet[i][idx.bi] * dataSet[j][idx.bi]));
                            binaries[j][i] = binaries[i][j];
                        }
                    }
                }
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function   
        return binaries;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
        return [[-500], [-500]];
    }
}
/********************************************************************* */
function calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, passed_aiArray, binaries) {
    if (passed_aiArray === void 0) { passed_aiArray = [-500]; }
    try {
        /***************************************************************************
        'The function calculates various derivatives of the PR1978 EOS
        'Calculates/returns an array of values
        '***************************************************************************/
        var a = 0;
        var b = 0;
        var Z = 0;
        var alpha_aiArray = [];
        var aiArray = [];
        var aij_Array = [];
        var sum_a = 0;
        var sum_b = 0;
        var vol = 0;
        var dPdT_V = 0;
        var dadT_V = 0;
        var dadT_P = 0;
        var dBdT_P = 0;
        var dZdT_P = 0;
        var dPdv_T = 0;
        var dVdT_P = 0;
        var outputArray = [];
        var myErrorMsg = "";
        var fcnName = "calculate_Derivatives";
        alpha_aiArray = create_alphaiArray(dataSet, tempK);
        if (alpha_aiArray[0] === -500) {
            myErrorMsg = "create_alphaiArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if (passed_aiArray[0] === -500) {
            aiArray = create_aiArray(dataSet, alpha_aiArray);
            if (aiArray[0] === -500) {
                myErrorMsg = "create_aiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        else {
            aiArray = passed_aiArray.slice(0);
        }
        ;
        aij_Array = create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK);
        if (aij_Array[0][0] === -500) {
            myErrorMsg = "create_aijArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_a = calculate_sum_a(dataSet, aij_Array, moleComp);
        if (sum_a === 0) {
            myErrorMsg = "calculate_sum_a returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_b = calculate_sum_b(dataSet, moleComp);
        if (sum_b === 0) {
            myErrorMsg = "calculate_sum_b returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        a = calculate_A(dataSet, sum_a, tempK, pBara);
        if (a === 0) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b = calculate_B(dataSet, sum_b, tempK, pBara);
        if (b === 0) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray, binaries);
        if (Z === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        vol = Z * gasLawR * tempK / pBara;
        if (Math.abs(vol - b) < Math.pow(10, -35)) {
            myErrorMsg = "The term 'volume - b' is too close to zero. Check phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        dadT_V = calculate_dadt(dataSet, tempK, moleComp, aij_Array, alpha_aiArray);
        if ((vol * (vol + sum_b) + sum_b * (vol - sum_b)) !== 0) {
            dPdv_T = -((gasLawR * tempK) / Math.pow((vol - sum_b), 2)) + ((2 * sum_a * (vol + sum_b)) / Math.pow((vol * (vol + sum_b) + sum_b * (vol - sum_b)), 2));
        }
        else {
            dPdv_T = 0;
            myErrorMsg = "The term '(vol * (vol + sum_b) + sum_b * (vol - sum_b))' equals zero. dPdv_T cannot be calculated. The phase must be vapor.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if ((vol * (vol + sum_b) + sum_b * (vol - sum_b)) !== 0 && (vol - sum_b) !== 0) {
            dPdT_V = ((gasLawR / (vol - sum_b)) - (dadT_V / (vol * (vol + sum_b) + sum_b * (vol - sum_b))));
        }
        else {
            dPdT_V = 0;
            myErrorMsg = "The term '(vol * (vol + sum_b) + sum_b * (vol - sum_b))' or '(vol - sum_b)' equal zero. dPdT_V cannot be calculated. The phase must be vapor.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        dadT_P = pBara * (dadT_V - ((2 * sum_a) / tempK)) / (Math.pow(gasLawR, 2) * Math.pow(tempK, 2));
        dBdT_P = -sum_b * pBara / (gasLawR * Math.pow(tempK, 2));
        if ((3 * Math.pow(Z, 2) + 2 * (b - 1) * Z + (a - 2 * b - 3 * Math.pow(b, 2))) !== 0) {
            dZdT_P = (dadT_P * (b - Z) + dBdT_P * (6 * b * Z + 2 * Z - 3 * Math.pow(b, 2) - 2 * b + a - Math.pow(Z, 2))) / (3 * Math.pow(Z, 2) + 2 * (b - 1) * Z + (a - 2 * b - 3 * Math.pow(b, 2)));
        }
        else {
            dZdT_P = 0;
            myErrorMsg = "The term '(3 * z ** 2 + 2 * (B - 1) * z + (A - 2 * B - 3 * B ** 2))' equals zero. dZdT_P cannot be calculated. Check phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        dVdT_P = (gasLawR / pBara) * (tempK * (dZdT_P) + Z);
        outputArray[idx.dadT_constV] = dadT_V;
        outputArray[idx.dPdv_constT] = dPdv_T;
        outputArray[idx.dPdT_constV] = dPdT_V;
        outputArray[idx.dadT_constP] = dadT_P;
        outputArray[idx.dBdT_constP] = dBdT_P;
        outputArray[idx.dZdT_constP] = dZdT_P;
        outputArray[idx.dVdT_constP] = dVdT_P;
        outputArray[idx.sumb] = sum_b;
        outputArray[idx.suma] = sum_a;
        outputArray[idx.a] = a;
        outputArray[idx.b] = b;
        outputArray[idx.Z] = Z;
        outputArray[idx.vol] = vol;
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        var outputArray = [-500]; //'<= Error flag
        return outputArray;
    }
}
/***********************************************************************/
function validateDataSet(dataRange, phase, cpDataRequired, binariesUsed, errorMsgsOn) {
    if (cpDataRequired === void 0) { cpDataRequired = false; }
    if (binariesUsed === void 0) { binariesUsed = false; }
    if (errorMsgsOn === void 0) { errorMsgsOn = false; }
    try {
        /***************************************************************************
        'This function reads the input dataRange cells and creates/returns and array of vapor or vapor and liquid species data
        'of a known format for all functions that utilise a dataSet in this module. If the CpDataRequired is True
        'and if the Phase passed is liquid then both vapor and liquid species
        'will be assembled into the return array otherwise the return array will only contain
        'vapor species.
        '***************************************************************************
        */
        var inputArray = [];
        var outputArray = [];
        var columnHeaders = [];
        var myErrorMsg = "";
        var fcnName = "validateDataSet";
        var liquidSpeciesFound = false;
        var liquidIndex = 0;
        inputArray = dataRange.slice(0);
        //First row of dataSet should have these labels after addition of S298 and Gf298. Using them for error checking.
        columnHeaders = ["(MW)", "(TC, K)", "(PC, bara)", "(OMEGA)", "(ZC)", "k(i)", "b(i)", "(TB, K)", "(Hvap, kJ/kg-mole)", "(Hf298, kJ/g-mole)", "(S298, J/g-mole/K)",
            "(Gf298, kJ/g-mole)", "(CPData)", "(NIST-TMN1)", "(NIST-TMX1)", "(NIST-A1)", "(NIST-B1)", "(NIST-C1)", "(NIST-D1)",
            "(NIST-E1)", "(NIST-F1)", "(NIST-G1)", "(NIST-H1)", "(NIST-TMN2)", "(NIST-TMX2)", "(NIST-A2)", "(NIST-B2)", "(NIST-C2)", "(NIST-D2)",
            "(NIST-E2)", "(NIST-F2)", "(NIST-G2)", "(NIST-H2)", "(NIST-TMN3)", "(NIST-TMX3)", "(NIST-A3)", "(NIST-B3)", "(NIST-C3)", "(NIST-D3)", "(NIST-E3)",
            "(NIST-F3)", "(NIST-G3)", "(NIST-H3)", "(NIST-TMN4)", "(NIST-TMX4)", "(NIST-A4)", "(NIST-B4)", "(NIST-C4)", "(NIST-D4)", "(NIST-E4)", "(NIST-F4)",
            "(NIST-G4)", "(NIST-H4)", "(NIST-TMN5)", "(NIST-TMX5)", "(NIST-A5)", "(NIST-B5)", "(NIST-C5)", "(NIST-D5)", "(NIST-E5)", "(NIST-F5)", "(NIST-G5)",
            "(NIST-H5)", "(NIST-TMN6)", "(NIST-TMX6)", "(NIST-A6)", "(NIST-B6)", "(NIST-C6)", "(NIST-D6)", "(NIST-E6)", "(NIST-F6)", "(NIST-G6)", "(NIST-H6)"];
        for (var i = 1; i < inputArray.length; i++) {
            if (inputArray[i].length - 1 !== columnHeaders.length) {
                myErrorMsg = "The input dataSet must be a range containing " + (columnHeaders.length + 1) + " columns. Species number " + i + " contains " + dataRange[i].length + " columns.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        for (var i = 0; i < columnHeaders.length; i++) {
            if (columnHeaders[i] === inputArray[0][i + 1]) {
            }
            else {
                myErrorMsg = "DataSet headers are incorrect: " + columnHeaders[i] + " NOT EQUAL TO " + inputArray[0][i + 1];
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i][0].toLowerCase() === "liquid") { //'<= look for the key work "Liquid" or "liquid" to detect liquid species in dataSet
                if (Math.abs(Math.floor((2 - inputArray.length / i))) < Math.pow(10, -15)) { //'<= make sure liquid dey word is in correct loaction to confirm correct structure of dataSet
                    liquidSpeciesFound = true;
                    liquidIndex = i - 1;
                }
                else {
                    myErrorMsg = "Liquid species found in wrong position of dataSet.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
        }
        //If heat capacity data is required and liquid species are present in dataSet then make space for all species.
        //Otherwise only make space for vapor species
        if (phase === "liquid" && cpDataRequired === true) {
            if (liquidSpeciesFound) {
                for (var i = 0; i < dataRange.length - 2; i++) {
                    outputArray.push([]);
                }
            }
            else {
                myErrorMsg = "Phase is liquid but liquid keyword in dataSet not found."; //<=Need liquid and vapor species. If not present need to bail.
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        if (phase.toLowerCase() === "vapor" || cpDataRequired === false) {
            if (liquidSpeciesFound === false) { //<= Need all species present in dataSet in case that no liquid species exist
                for (var i = 0; i < dataRange.length - 1; i++) {
                    outputArray.push([]);
                }
            }
            else {
                for (var i = 0; i < liquidIndex; i++) { //<= Need only vapor species in dataSet. Do not need the liquid species.
                    outputArray.push([]);
                }
            }
        }
        //Make space in 0 row index for parameters used outside this function
        for (var k = 0; k < idx.finalIndex; k++) {
            outputArray[0].push(0);
        }
        //Make space for balance of pure component species data
        for (var i = 1; i < outputArray.length; i++) {
            for (var j = 0; j < outputArray[1].length; j++) {
                outputArray[i].push(0);
            }
        }
        if (phase.toLowerCase() === "liquid" && cpDataRequired === true) {
            if (liquidSpeciesFound === false) {
                myErrorMsg = "Provided phase is liquid but liquid keyword in first column of dataSet not found."; //<=Need liquid and vapor species. If not present need to bail.
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        var m = 0;
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i][0].toLowerCase() !== "liquid" && i != 0) {
                for (var j = 0; j < inputArray[i].length - 1; j++) {
                    if (inputArray[i][j + 1] !== undefined && j !== idx.cpData) {
                        outputArray[m][j] = inputArray[i][j + 1];
                    }
                    else if (j === idx.cpData) {
                        outputArray[m][j] = inputArray[i][j + 1].toString();
                    }
                    else {
                        outputArray[m][j] = 0;
                    }
                }
                //'<= Strip header row and species names by advancing inputarray }}indexes
                if (m === outputArray.length - 1) {
                    break;
                }
                else {
                    m = m + 1;
                }
            }
        }
        if (inputArray[0][0].toString().toLowerCase().indexOf("twu alpha") !== -1) { //'<=vbTextCompare eliminates the need to check the string for capital letters or needing to use lcase fcn
            outputArray[0][idx.alphaType] = true; //'<= 1 forces create_alphaiArray() function to use the Twu Alpha method
        }
        else {
            outputArray[0][idx.alphaType] = false; //'<= 0 the allows create_alphaiArray() function to calculate normally
        }
        if (inputArray[0][0].toString().toLowerCase().indexOf("predictive") !== -1) { //'<=vbTextCompare eliminates the need to check the string for capital letters or needing to use lcase fcn
            outputArray[0][idx.predictive] = true; //'<= 1 forces create_alphaiArray() function to use the Twu Alpha method
        }
        else {
            outputArray[0][idx.predictive] = false; //'<= 0 the allows create_alphaiArray() function to calculate normally
        }
        if (inputArray[0][0].toString().toLowerCase().indexOf("error messages on") !== -1) { //'<=global dataSet level error messages flag on
            outputArray[0][idx.errMsgsOn] = true;
        }
        else {
            outputArray[0][idx.errMsgsOn] = false; //'<=global dataSet level error messages flag off
        }
        outputArray[0][idx.liquidIndex] = liquidIndex; //'<=store this data for use outside of this procedure
        if (liquidSpeciesFound) {
            outputArray[0][idx.iSpecies] = liquidIndex;
        }
        else {
            outputArray[0][idx.iSpecies] = outputArray.length;
        }
        outputArray[0][idx.liquidsFound] = liquidSpeciesFound;
        if (binariesUsed) {
            outputArray[0][idx.binariesUsed] = true;
        }
        else {
            outputArray[0][idx.binariesUsed] = false;
        }
        dataRange[0][idx.globalErrmsg] = myErrorMsg;
        return outputArray;
    }
    catch (myErrorHandler) {
        return [[myErrorHandler.message], [0]];
    } // catch end
}
/*******************************************************************************/
function validateMoles(dataSet, moles, arraySize) {
    /*'***************************************************************************
    'This function checks for user input errors and returns
    'a one dimersional array of mole composition
    '***************************************************************************/
    try {
        var totalMoles = void 0;
        var inputMoles = [];
        var inputFractions = [];
        var outputArray = [];
        var myErrorMsg = "";
        var moleFractionSum = void 0;
        var fcnName = "validateMoles";
        if (arraySize[2] !== false && arraySize[2] !== 1) {
            myErrorMsg = "The moles parameter must be either a range of values or the number 1 indicating a pure component dataSet containing a single component with or without a liquid phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        else {
            if (dataSet[0][idx.iSpecies] === 1) { //'<= For the case a single species dataSet allowing for mole composition = 1
                outputArray.push(1);
                return outputArray;
            }
        }
        //'=================== Validate Moles and calculate mole fractions
        if (moles.length !== dataSet[0][idx.iSpecies]) {
            myErrorMsg = "Number of species does not equal the number of mole amounts!";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        else {
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                inputMoles.push(0);
                if (typeof (moles[i]) === "string" || typeof (moles[i]) === "boolean") {
                    myErrorMsg = "Some mole amounts are not numbers.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                else if (moles[i] === "" || typeof (moles[i]) === null) {
                    inputMoles[i] = 0;
                }
                else {
                    inputMoles[i] = moles[i];
                }
            }
            if (inputMoles[0] < 0) {
                myErrorMsg = "Mole amount is less than or equal to zero.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            else {
                if (inputMoles.length === 1 && inputMoles[0] === 1) {
                    outputArray.push(1);
                    return outputArray;
                }
                totalMoles = 0;
                for (var i = 0; i < inputMoles.length; i++) {
                    if (typeof (Number(inputMoles[i])) === "number") {
                        if (inputMoles[i] >= 0) {
                            totalMoles = totalMoles + Number(inputMoles[i]);
                        }
                        else {
                            myErrorMsg = "Some moles amounts are not numeric!";
                            throw new Error(fcnName + ": " + myErrorMsg);
                        }
                    }
                    else {
                        "Some moles amounts are not numeric!";
                        throw new Error(fcnName + ": " + myErrorMsg);
                    }
                }
                moleFractionSum = 0;
                if (totalMoles > 0) {
                    for (var i = 0; i < inputMoles.length; i++) {
                        inputFractions.push(inputMoles[i] / totalMoles);
                        moleFractionSum = inputFractions[i] + moleFractionSum;
                    }
                }
                else {
                    myErrorMsg = "No moles amounts or all amounts are zero.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                if (moleFractionSum > 1.00000000001 || 0.99999999999 > moleFractionSum) {
                    myErrorMsg = "Mole fractions do not add up to one.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function   
        return inputFractions;
    } // try end
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return [-500];
    } // catch end
}
/*************************************************************************/
function calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed, passed_aiArray, binaries) {
    if (passed_aiArray === void 0) { passed_aiArray = [-500]; }
    if (binaries === void 0) { binaries = [[-500], [-500]]; }
    try {
        /*'***************************************************************************
        'This function is called by all of the PR1978 functions
        'This function calculates the PR1978 EOS compressibility factor
        '***************************************************************************/
        var a = void 0;
        var b = void 0;
        var Z = void 0;
        var alpha_aiArray = [];
        var aiArray = [];
        var aij_Array = [];
        var sum_a = void 0;
        var sum_b = void 0;
        var myErrorMsg = "";
        var fcnName = "calculate_PhaseZ";
        if (passed_aiArray[0] === -500) {
            alpha_aiArray = create_alphaiArray(dataSet, tempK);
            if (alpha_aiArray[0] === -500) {
                myErrorMsg = "create_alphaiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            aiArray = create_aiArray(dataSet, alpha_aiArray);
            if (aiArray[0] === -500) {
                myErrorMsg = "create_aiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        else {
            aiArray = passed_aiArray.slice(0);
        }
        ;
        aij_Array = create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK);
        if (aij_Array[0][0] === -500) {
            myErrorMsg = "create_aijArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_a = calculate_sum_a(dataSet, aij_Array, moleComp);
        if (sum_a === -500) {
            myErrorMsg = "calculate_sum_a returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_b = calculate_sum_b(dataSet, moleComp);
        if (sum_b === -500) {
            myErrorMsg = "calculate_sum_b returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        a = calculate_A(dataSet, sum_a, tempK, pBara);
        if (a === -500) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b = calculate_B(dataSet, sum_b, tempK, pBara);
        if (b === -500) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z = findCubicRoots_js_1.getCubicRoot(1, (b - 1), a - 3 * Math.pow(b, 2) - 2 * b, (-a * b + Math.pow(b, 2) + Math.pow(b, 3)), phase);
        if (Z === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function   
        return Z;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
/****************************************************************************** */
function calculate_Phi(dataSet, phase, moleComp, tempK, pBara, binariesUsed, passed_aiArray, binaries) {
    if (passed_aiArray === void 0) { passed_aiArray = [-500]; }
    if (binaries === void 0) { binaries = [[-500], [-500]]; }
    try {
        /*'***************************************************************************
        'This function is called by all of the PR1978 functions
        'This function calculates the PR1978 EOS fugacity coefficients
        '***************************************************************************/
        var alpha_aiArray = [];
        var aiArray = [];
        var aij_Array = [];
        var xi_aijArray = [];
        var Phi = [];
        for (var i = 0; i < dataSet[0][idx.iSpecies] + 2; i++) {
            Phi[i] = 0;
        }
        var myErrorMsg = "";
        var fcnName = "calculate_Phi";
        if (passed_aiArray[0] === -500) {
            alpha_aiArray = create_alphaiArray(dataSet, tempK);
            if (alpha_aiArray[0] === -500) {
                myErrorMsg = "create_alphaiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            aiArray = create_aiArray(dataSet, alpha_aiArray);
            if (aiArray[0] === -500) {
                myErrorMsg = "create_aiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        else {
            aiArray = passed_aiArray.slice(0);
        }
        ;
        aij_Array = create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK);
        if (aij_Array[0][0] === -500) {
            myErrorMsg = "create_aijArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var sum_a = calculate_sum_a(dataSet, aij_Array, moleComp);
        var sum_b = calculate_sum_b(dataSet, moleComp);
        if (sum_b === 0) {
            myErrorMsg = "sum_b is zero and it will cause a divide by zero in the Phi() function.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var a = calculate_A(dataSet, sum_a, tempK, pBara);
        var b = calculate_B(dataSet, sum_b, tempK, pBara);
        var Z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray, binaries);
        if (Z - b < 0) {
            myErrorMsg = "the term z - B is less than zero. Check supplied Phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        xi_aijArray = create_xi_aijArray(dataSet, aij_Array, moleComp);
        if ((Z + (Math.pow(2, 0.5) + 1) * b) / (Z - (Math.pow(2, 0.5) - 1) * b) < 0) {
            myErrorMsg = "Check supplied Phase. The term ((z + (2 ** 0.5 + 1) * B) / (z - (2 ** 0.5 - 1) * B)) is less than zero. This will cause and error in the ln() function of the Phi() expression.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var logTerm = ((Z + (Math.pow(2, 0.5) + 1) * b) / (Z - (Math.pow(2, 0.5) - 1) * b));
        if (logTerm === 0 || logTerm < 0) {
            myErrorMsg = "The log term of the phi formula is less then or equal to zero. Check supplied Phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if (logTerm === NaN || logTerm === undefined || logTerm === -Infinity) {
            myErrorMsg = "The Phi() function attemped to take the ln() of zero or a negative number. Check supplied Phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        logTerm = Math.log(logTerm);
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            var tempPhi = ((sum_a / (gasLawR * tempK * sum_b * 2 * Math.pow(2, 0.5))) * ((2 * xi_aijArray[i] / sum_a) - (dataSet[i][idx.bi] / sum_b)) * logTerm);
            if (Phi[i] === NaN || Phi[i] === undefined) {
                myErrorMsg = "The Phi() function attemped to take the ln() of a negative number. Check supplied Phase.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            else if (Phi[i] === -Infinity) {
                myErrorMsg = "sum_b or (z - (2 ** 0.5 - 1) * B) equal zero. Divide by zero error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            tempPhi = (dataSet[i][idx.bi] / sum_b) * (Z - 1) - Math.log(Z - b) - tempPhi;
            Phi[i] = Math.exp(tempPhi);
            //console.log(Phi[i])
        }
        Phi[dataSet[0][idx.iSpecies]] = Z; // '<= Add z to bottom of array because in can! : 
        Phi[dataSet[0][idx.iSpecies] + 1] = 0; // '<= Error flag - 0 = no error, -500 = error*/
        dataSet[0][idx.globalErrmsg] = myErrorMsg; //Used to transfer warning messages to calling function   
        return Phi;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        ;
        return [-500];
    }
}
/***************************************************************************** */
function selectCpDataRanges(dataSet, tempK, Phase) {
    try {
        /***************************************************************************
        'The function is called by Enthalpy and Entropy
        'This function compares tempK, 298 K and if necessary T Boil K against the 6 available heat capacity temperature ranges for each species
        'This function returns the required index values for TMN. For vapor calculation only two comparisons are required - tempK and 298 K.
        'For liquids four comparisons are required - tempK, 298 K, T boil liquid, and T boil for vapor
        'If heat capacity data is not found the a -500 flag is raised and zero indexes and passed to the calling funciton
        'If max temp heat capacity data found is below tempk the a -400 flag is raised and the highest available heat capacity data is passed to the calling function causing loss of accuracy for that species
        '***************************************************************************/
        var T298_Found = false;
        var TK_Found = false;
        var TVNBP_Found = false;
        var TLNBP_Found = false;
        var CpRangeIndexes = [];
        var LastTMX_Indexes = [];
        var fcnName = "selectCpDataRanges";
        var myErrorMsg = "";
        var g_Liq = 0;
        if (Phase === "liquid") {
            CpRangeIndexes = initial2D_Array(dataSet[0][idx.iSpecies], 5); //'<= This is the result array used to store the indexes of the Cp equation with valid NIST-TMN and NIST-TMX values for input parameter TempK
        }
        else { //'<= Index 4 stores an error flag. If a required temperature does not fall within the available Cp data temperture range then the species will be ingored.
            CpRangeIndexes = initial2D_Array(dataSet[0][idx.iSpecies], 3); //'<= Index 2 stores an error flag. If a required temperature does not fall within the available Cp data temperture range then the species will be ingored.
        }
        for (var i = 0; i < dataSet.length; i++) { // '<= Create and initialize an array to hold the index of the highest valid NIST-TMXn for each species
            LastTMX_Indexes.push(0);
        }
        var k = idx.NIST_TMX6;
        for (var i = 0; i <= dataSet.length; i++) {
            k = idx.NIST_TMX6;
            for (var j = idx.NIST_TMX1; j <= idx.NIST_TMX6; j += 10) {
                if (LastTMX_Indexes[i] === 0) { //'<= Find highest valid NIST-TMXn for each species and store it in LastTMX_Indexes(]
                    if (Number(dataSet[i][k]) === NaN) {
                        LastTMX_Indexes[i] = 0;
                    }
                    else if (dataSet[i][k] > 0) {
                        LastTMX_Indexes[i] = k;
                        break;
                    }
                }
                k = k - 10;
            }
        }
        if (Phase === "vapor") {
            for (var i = 0; i < dataSet.length; i++) {
                T298_Found = false;
                TK_Found = false;
                for (var j = idx.NIST_TMX1; j <= LastTMX_Indexes[i]; j += 10) {
                    if (TK_Found === false) {
                        if (tempK < dataSet[i][idx.NIST_TMN1] || tempK > dataSet[i][LastTMX_Indexes[i]]) { //'<= Test if parameter TempK is between NIST-MN1 and the highest available max NIST temperature
                            if (LastTMX_Indexes[i] !== 0 && tempK > dataSet[i][idx.NIST_TMN1]) {
                                CpRangeIndexes[i][2] = -400; // '<= Error flag: Species does not have valide Cp data - this species will be ignored
                                CpRangeIndexes[i][idx.tempK] = LastTMX_Indexes[i] + 1;
                                TK_Found = true;
                            }
                            else {
                                CpRangeIndexes[i][2] = -500; //'<= Error flag: Species does not have valide Cp data - this species will be ignored
                                TK_Found = true;
                            }
                        }
                        else if (dataSet[i][idx.NIST_TMN1] <= tempK && tempK <= dataSet[i][j]) { // '<= Test if parameter TempK is between NIST-MN1 and the next lower available max NIST temperature
                            CpRangeIndexes[i][idx.tempK] = j + 1;
                            TK_Found = true;
                        }
                    }
                    if (T298_Found === false) {
                        if (298.15 < dataSet[i][idx.NIST_TMN1] || 298.15 > dataSet[i][LastTMX_Indexes[i]]) { //'<= Test if 298 k is between NIST-MN1 and the first highest max NIST temperature
                            CpRangeIndexes[i][2] = -500; //'<= Error flag: Species does not have valide Cp data - this species will be ignored
                            T298_Found = true;
                        }
                        else if (dataSet[i][idx.NIST_TMN1] <= 298.15 && 298.15 <= dataSet[i][j]) { // '<= Test if parameter TempK is between NIST-MN1 and the next lower available max NIST temperature
                            CpRangeIndexes[i][idx.Vap298] = j + 1;
                            T298_Found = true;
                        }
                    }
                    if (TK_Found && T298_Found) {
                        break; // j = LastTMX_Indexes[i]
                    }
                }
            }
        }
        if (Phase === "liquid") {
            if (dataSet[0][idx.liquidIndex] !== (dataSet.length) / 2) {
                myErrorMsg = "First liquid species in wrong position of dataSet.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            g_Liq = ((dataSet.length) / 2) - 1; // '<= The g_Liq iterator is for(the liquid species
            for (var i_Vap = 0; i_Vap <= ((dataSet.length) / 2) - 1; i_Vap++) { //'<= The i_Vap iterator is for(the vapor species
                T298_Found = false;
                TK_Found = false;
                TVNBP_Found = false;
                TLNBP_Found = false;
                g_Liq = g_Liq + 1;
                if (dataSet[g_Liq][idx.cpData] !== "No Data" && dataSet[g_Liq][idx.cpData] !== "Not Found!") { //'<= Ingoring liquid species present at low concentrations
                    if (LastTMX_Indexes[g_Liq] !== 0) {
                        for (var j = idx.NIST_TMX1; j <= LastTMX_Indexes[g_Liq]; j += 10) {
                            if (TK_Found === false) {
                                if (tempK < dataSet[g_Liq][idx.NIST_TMN1] || tempK > dataSet[g_Liq][LastTMX_Indexes[g_Liq]] || LastTMX_Indexes[g_Liq] === 0) { // '<= Test if parameter TempK is between NIST-MN1 and the highest available max NIST temperature for(liquid species [g_Liq - iterator)
                                    if (LastTMX_Indexes[g_Liq] !== 0 && tempK > dataSet[g_Liq][idx.NIST_TMN1]) {
                                        CpRangeIndexes[i_Vap][4] = -400; //  '<= Error flag: Species does not have valide Cp data - this species will be ignored
                                        CpRangeIndexes[i_Vap][idx.tempK] = LastTMX_Indexes[g_Liq] + 1;
                                        TK_Found = true;
                                    }
                                    else {
                                        CpRangeIndexes[i_Vap][4] = -500;
                                        TK_Found = true;
                                    }
                                }
                                else if (dataSet[g_Liq][idx.NIST_TMN1] <= tempK && tempK <= dataSet[g_Liq][j]) { //'<= Test if parameter TempK is between NIST-MN1 and the next available max NIST temperature for(liquid species (g_Liq - iterator)
                                    CpRangeIndexes[i_Vap][idx.tempK] = j + 1;
                                    TK_Found = true;
                                }
                            }
                            if (TLNBP_Found === false) {
                                if (dataSet[i_Vap][idx.tb] < dataSet[g_Liq][idx.NIST_TMN1] || dataSet[i_Vap][idx.tb] > dataSet[g_Liq][LastTMX_Indexes[g_Liq]]) { //'<= Test if parameter specie normal boiling point is between NIST-MN1 and the highest available max NIST temperature for(liquid species (g_Liq - iterator)
                                    if (LastTMX_Indexes[g_Liq] !== 0 && dataSet[i_Vap][idx.tb] > dataSet[g_Liq][idx.NIST_TMN1]) {
                                        CpRangeIndexes[i_Vap][4] = -400; // '<= Error flag: Species does not have valide Cp data - this species will be ignored
                                        CpRangeIndexes[i_Vap][idx.NBPLiq] = LastTMX_Indexes[g_Liq] + 1;
                                        TK_Found = true;
                                    }
                                    else {
                                        CpRangeIndexes[i_Vap][4] = -500;
                                        TK_Found = true;
                                    } // '<= Using vapor species normal boiling point data
                                }
                                else if (dataSet[g_Liq][idx.NIST_TMN1] <= dataSet[i_Vap][idx.tb] && dataSet[i_Vap][idx.tb] <= dataSet[g_Liq][j]) { // '<= Test if parameter specie normal boiling point is between NIST-MN1 and the next available max NIST temperature for(liquid species (g_Liq - iterator]
                                    CpRangeIndexes[i_Vap][idx.NBPLiq] = j + 1;
                                    TLNBP_Found = true;
                                }
                            }
                            if (T298_Found === false) {
                                if (298.15 < dataSet[i_Vap][idx.NIST_TMN1] || 298.15 > dataSet[i_Vap][LastTMX_Indexes[i_Vap]]) { // '<= Test if 298 K is between NIST-MN1 and the highest available max NIST temperature for(vapor species (i_Vap - iterator)
                                    CpRangeIndexes[i_Vap][4] = -500; // '<= Error flag: Species does not have valide Cp data - this species will be ignored
                                    T298_Found = true;
                                }
                                else if (dataSet[i_Vap][idx.NIST_TMN1] <= 298.15 && 298.15 <= dataSet[i_Vap][j]) { // '<= Test if parameter 298 K is between NIST-MN1 and the next available max NIST temperature for(vapor species (i_Vap - iterator)
                                    CpRangeIndexes[i_Vap][idx.Vap298] = j + 1;
                                    T298_Found = true;
                                }
                            }
                            if (TVNBP_Found === false) {
                                if (dataSet[i_Vap][idx.tb] < dataSet[i_Vap][idx.NIST_TMN1] || dataSet[i_Vap][idx.tb] > dataSet[i_Vap][LastTMX_Indexes[i_Vap]]) { //'<= Test if parameter species normal boiling point is between NIST-MN1 and the highest available max NIST temperature for[vapor species (i_Vap - iterator)
                                    CpRangeIndexes[i_Vap][4] = -500; // '<= Error flag: Species does not have valide Cp data - this species will be ignored
                                    TVNBP_Found = true; // '<= Using vapor species normal boiling point data
                                }
                                else if (dataSet[i_Vap][idx.NIST_TMN1] <= dataSet[i_Vap][idx.tb] && dataSet[i_Vap][idx.tb] <= dataSet[i_Vap][j]) { //'<= Test if parameter species normal boiling point is between NIST-MN1 and the next available max NIST temperature for(vapor species (i_Vap - iterator)
                                    CpRangeIndexes[i_Vap][idx.NBPVap] = j + 1;
                                    TVNBP_Found = true;
                                }
                            }
                            if (TK_Found && T298_Found && TLNBP_Found && TVNBP_Found) {
                                break;
                            }
                        }
                    }
                }
                else {
                    CpRangeIndexes[i_Vap][4] = -500;
                }
            }
        }
        /* 'range of TMN, TMX and Polynomual Coefficients index i ranges from 1 to 8 to match the Shomate equation coefficients A through H
         'Data for species can be added to the PData worksheet. NIST data is organized as follows:
         'Cp = A + B * T + C * T2 + D * t3 + E / T2
         'H - H298.15= A*t + B*t2/2 + C*t3/3 + D*t4/4 - E/t + F - H
         'S = A * Ln(T) + B * T + C * T2 / 2 + D * t3 / 3 - E / (2 * T2) + g
         'Cp = heat capacity (J/mol*K)
         'H = standard enthalpy (kJ/mol)
         'S = standard entropy (J/mol*K)
         'T = temperature(K) / 1000
         'uses TemK/1000 and calculates .
         'if NIST data is entered into the PData worksheet the column labeled '(CPDATA)' must contain 'NIST' to divide TempK by 1000*/
        return CpRangeIndexes;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
/***************************************************************************** */
function calculate_Wilson_K(dataSet, tempK, pBara) {
    var fcnName = "calculate_Wilson_K";
    try {
        /***************************************************************************
        'This function is called from the FlashTP function.
        'This function calculates the Wilson relative volitility
        '***************************************************************************


        ' This function uses the Wilson equation to estimate the Ki values given temperature in degrees C
        'and the pressure in bara. It returns a one dimensional array.*/
        var outputArray = [];
        var myErrorMsg = "";
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray.push(Math.exp((5.37 * (1 + dataSet[i][idx.omega])) * (1 - dataSet[i][idx.tc] / tempK)) / (pBara / dataSet[i][idx.pc]));
        }
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return outputArray;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorHandler.message;
    }
}
/************************************************************************** */
/**
* Calculates estimates of the dew or bubble points (C) given P (pbara), mole amounts or composition, phase (vapor or liquid) and a dataSet.
*
* @customfunction
*/
function calculate_T_BubDew_Est(dataRange, pressure, moles, dewOrBub, errMsgsOn, passedDataSet, passedMoleComp, passedPressure) {
    if (passedDataSet === void 0) { passedDataSet = [[-500], [-500]]; }
    if (passedMoleComp === void 0) { passedMoleComp = [-500]; }
    if (passedPressure === void 0) { passedPressure = -500; }
    try {
        /***************************************************************************
        'This function is called by BubbleT and DewT functions to calculate the initial guess of the dew or bubble temperature
        'More on this function can be found in Reference 5 and Reference 15
        '***************************************************************************/
        var T_Lo = 0;
        var T_Hi = 0;
        var T_New = 0;
        var y_Sum_Lo = 0;
        var y_Sum_Hi = 0;
        var y_Sum = 0;
        var x_Sum_Lo = 0;
        var x_Sum_Hi = 0;
        var x_Sum = 0;
        var Ki = [];
        var T_Dew_Est = 0;
        var T_Bub_Est = 0;
        var Counter = 0;
        var BubTempFound = false;
        var DewTempFound = false;
        var myErrorMsg = "";
        var inputDataArray = [];
        var pBara = 0;
        var moleComp = [];
        var dataSet = [];
        var fcnName = "calculate_T_BubDew_Est";
        if (typeof (dewOrBub) === "object" && dewOrBub.length !== "undefined") {
            if (typeof (dewOrBub[0]) === "object" && dewOrBub[0].length !== "undefined") {
                dewOrBub = dewOrBub[0][0].toString().toLowerCase();
            }
            else {
                dewOrBub = dewOrBub[0].toString().toLowerCase();
            }
        }
        else {
            dewOrBub = dewOrBub.toString().toLowerCase();
        }
        if (typeof (errMsgsOn) === "undefined") {
            errMsgsOn = false;
        }
        if (passedDataSet === [[-500], [-500]] || passedMoleComp === [-500] || passedPressure === -500) {
            if (typeof (dataRange) === "undefined") {
                dataRange = [[-500], [-500]];
            }
            if (typeof (pressure) === "undefined") {
                pressure === -500;
            }
            if (typeof (moles) === "undefined") {
                moles === [-500];
            }
            inputDataArray = validateData(dataRange, -500, pressure, moles, "vapor", false, [[-500], [-500]], [[-500], [-500]], [[-500], [-500]], errMsgsOn, -500, false);
            dataSet = inputDataArray[idx.datasetArray];
            if (typeof (dataSet[0]) === "string") {
                myErrorMsg = dataSet[0].toString();
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            if (dataSet[0][idx.globalErrmsg] !== "") {
                myErrorMsg = dataSet[0].toString();
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
            moleComp = inputDataArray[idx.moleCompArray];
        }
        else {
            dataSet = passedDataSet.slice(0);
            pBara = passedPressure;
            moleComp = passedMoleComp.slice(0);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            Ki.push(0);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            T_Bub_Est = T_Bub_Est + moleComp[i] * dataSet[i][idx.tc];
        }
        T_Bub_Est = T_Bub_Est * 0.7;
        while (BubTempFound === false) {
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                if (T_Bub_Est === 0 && dataSet[i][idx.tb] >= 0 && dataSet[i][idx.tc] === 0 || pBara === 0 || (1 / dataSet[i][idx.tc] - 1 / dataSet[i][idx.tb]) === 0) {
                    myErrorMsg = "Species " + i + " error: The supplied pressure or critical temperature equals zero or there is a problem with the species boiling point.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                Ki[i] = (Math.pow(dataSet[i][idx.pc], (((1 / T_Bub_Est - 1 / dataSet[i][idx.tb]) / ((1 / dataSet[i][idx.tc]) - (1 / dataSet[i][idx.tb]))))) / pBara);
                if (Ki[i] === Infinity) {
                    myErrorMsg = "Overflow error. Tried to divided a number by a very small number in Ki estimate calc found in LSU/FAM Dew & Bubble T paper.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            }
            y_Sum = 0;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                y_Sum = y_Sum + moleComp[i] * Ki[i];
            }
            if (y_Sum < 1) {
                T_Lo = T_Bub_Est;
                y_Sum_Lo = y_Sum - 1;
                T_New = T_Bub_Est * 1.1;
            }
            if (y_Sum > 1) {
                T_Hi = T_Bub_Est;
                y_Sum_Hi = y_Sum - 1;
                T_New = T_Bub_Est / 1.1;
            }
            if (y_Sum === 1) {
                BubTempFound = true;
            }
            if (T_Lo * T_Hi > 0) {
                T_New = (y_Sum_Hi * T_Lo - y_Sum_Lo * T_Hi) / (y_Sum_Hi - y_Sum_Lo);
            }
            if (Math.abs(T_Bub_Est - T_New) < 0.001) {
                BubTempFound = true;
            }
            if (Math.abs(y_Sum - 1) < 0.00001) {
                BubTempFound = true;
            }
            Counter = Counter + 1;
            T_Bub_Est = T_New;
            if (Counter === 1000) {
                myErrorMsg = "Counter is 100 iterations.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        } // loop
        Counter = 0;
        T_Dew_Est = 1.1 * T_Bub_Est;
        T_Lo = 0;
        T_Hi = 0;
        while (DewTempFound === false) {
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                Ki[i] = (Math.pow(dataSet[i][idx.pc], ((((1 / T_Dew_Est) - (1 / dataSet[i][idx.tb])) / (1 / dataSet[i][idx.tc] - 1 / dataSet[i][idx.tb]))))) / pBara;
            }
            x_Sum = 0;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                x_Sum = x_Sum + moleComp[i] / Ki[i];
            }
            if (x_Sum < 1) {
                T_Lo = T_Dew_Est;
                x_Sum_Lo = x_Sum - 1;
                T_New = T_Dew_Est / 1.1;
            }
            if (x_Sum > 1) {
                T_Hi = T_Dew_Est;
                x_Sum_Hi = x_Sum - 1;
                T_New = T_Dew_Est * 1.1;
            }
            if (x_Sum === 1) {
                DewTempFound = true;
            }
            if (T_Lo * T_Hi > 0) {
                T_New = (T_Lo * x_Sum_Hi - T_Hi * x_Sum_Lo) / (x_Sum_Hi - x_Sum_Lo);
            }
            if (Math.abs(T_Dew_Est - T_New) < 0.001) {
                DewTempFound = true;
            }
            if (Math.abs(x_Sum - 1) < 0.00001) {
                DewTempFound = true;
            }
            Counter = Counter + 1;
            T_Dew_Est = T_New;
            if (Counter === 1000) {
                myErrorMsg = "More than 100 iterations!";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        } // loop
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        if (dewOrBub === "dew") {
            return T_Dew_Est - 273.15;
        }
        if (dewOrBub === "bubble") {
            return T_Bub_Est - 273.15;
        }
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.calculate_T_BubDew_Est = calculate_T_BubDew_Est;
/************************************************************************** */
function initial2D_Array(rows, cols) {
    var array = [];
    var row = [];
    while (cols--)
        row.push(0);
    while (rows--)
        array.push(row.slice());
    return array;
}
/************************************************************************** */
function inRange(low, high, x) {
    return ((x - high) * (x - low) <= 0); // Returns true if x is in range [low..high], else false
}
/************************************************************************** */
function size(ar) {
    /* This funciton is used to determine if the user input a hard number or a cell reference as a custom funciton parameter. If a cell reference is passed it reports
       the number of dimensions.*/
    var row_count = ar.length;
    var row_sizes = [];
    for (var i = 0; i < row_count; i++) {
        if (ar[i] !== "") {
            if (typeof (ar[i]) === "object" && ar[i].length !== "undefined") {
                if (typeof (ar[i][1]) === "object" && ar[i][1].length !== "undefined") {
                    row_sizes.push([true, ar[i].length, ar[i][1].length]);
                }
                else {
                    row_sizes.push([true, ar[i].length, false]);
                }
            }
            else {
                row_sizes.push([false, ar[i], false]);
            }
        }
        else {
            row_sizes.push([""]);
        }
    }
    return row_sizes;
}
/*************************************************************************** */
function validateData(dataRange, temperature, pressure, moles, inputPhase, binariesUsed, kij0, kijT, decomposition, errorMsgsOn, guessedTemp, CpDataRequired) {
    if (CpDataRequired === void 0) { CpDataRequired = false; }
    try {
        var myErrorMsg = "";
        var fcnName = "validateData";
        var alpha_aiArray = [];
        var aiArray = [];
        var dataSet = [];
        var moleComp = [];
        var tempK = 0;
        var pBara = 0;
        var phase = "";
        var outputArray = [];
        var returnWarnings = false;
        var kij0_kijT_deComp_Array = [];
        var arraySizes = [];
        var currIndex = 0;
        var guessedTempK = 0;
        var tempC = 0;
        var guessedTempC = 0;
        var index = void 0;
        (function (index) {
            index[index["arrayTest"] = 0] = "arrayTest";
            index[index["valueORlength1"] = 1] = "valueORlength1";
            index[index["Dim2TestORlength2"] = 2] = "Dim2TestORlength2";
        })(index || (index = {}));
        if (typeof (dataRange) === "undefined") {
            dataRange = [[-500], [-500]];
        }
        if (typeof (temperature) === "undefined") {
            temperature = -500;
        }
        if (typeof (pressure) === "undefined") {
            pressure = -500;
        }
        if (typeof (moles) === "undefined") {
            moles = [-500];
        }
        if (typeof (inputPhase) === "undefined") {
            inputPhase = "undefined";
        }
        if (typeof (binariesUsed) === "undefined") {
            binariesUsed = false;
        }
        if (typeof (kij0) === "undefined") {
            kij0 = [[-500], [-500]];
        }
        if (typeof (kijT) === "undefined") {
            kijT = [[-500], [-500]];
        }
        if (typeof (decomposition) === "undefined") {
            decomposition = [[-500], [-500]];
        }
        if (typeof (errorMsgsOn) === "undefined") {
            errorMsgsOn = false;
        }
        if (typeof (guessedTemp) === "undefined") {
            guessedTemp = -500;
        }
        var inputArray = [dataRange, temperature, pressure, moles, inputPhase, binariesUsed, kij0, kijT, decomposition, errorMsgsOn, guessedTemp];
        var inputArrayNames = ["dataRange", "temperature", "pressure", "moles", "inputPhase", "binariesUsed", "kij0", "kijT", "decomposition", "errorMsgsOn", "guessedTemp"];
        arraySizes = size(inputArray); //Look for arrays and confirm dimensions and return results in arraySizes
        currIndex = inputArrayNames.indexOf("inputPhase");
        if (inputPhase.toString().toLowerCase() !== "vapor" && inputPhase.toString().toLowerCase() !== "liquid") {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === 1) {
                phase = inputArray[currIndex][0].toString().toLowerCase();
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied phase and must be a string or a single cell reference to a string equal to 'vapor' or 'liquid'.";
                    return [[myErrorMsg], [0]];
                }
            }
            else {
                phase = inputArray[currIndex][0].toString().toLowerCase();
            }
        }
        else {
            phase = inputArray[currIndex].toString().toLowerCase();
        }
        if (phase !== "liquid" && phase !== "vapor") {
            myErrorMsg = fcnName + ": The supplied phase (" + phase + ") and must be a string or a single cell reference equal to vapor or liquid.";
            return [[myErrorMsg], [0]];
        }
        currIndex = inputArrayNames.indexOf("binariesUsed");
        if (binariesUsed !== true && binariesUsed !== false && binariesUsed !== 1 && binariesUsed !== 0) {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === false) {
                binariesUsed = inputArray[currIndex][0];
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied parameter 'binariesUsed' (" + binariesUsed + ") and must be an expression  or a single cell reference to an expression that evaluates to true or false.";
                    return [[myErrorMsg], [0]];
                }
            }
            else {
                binariesUsed = inputArray[currIndex][0];
            }
        }
        else {
            binariesUsed = inputArray[currIndex];
        }
        if (binariesUsed === 0 || binariesUsed === "false" || binariesUsed === false) {
            binariesUsed = false;
        }
        else if (binariesUsed === 1 || binariesUsed === "true" || binariesUsed === true) {
            binariesUsed = true;
        }
        else if (arraySizes[currIndex][1] === "") {
            binariesUsed = false;
        }
        else {
            myErrorMsg = fcnName + ": The supplied parameter 'binariesUsed' (" + binariesUsed + ") and must be an expression  or a single cell reference to an expression that evaluates to true or false.";
            return [[myErrorMsg], [0]];
        }
        ;
        currIndex = inputArrayNames.indexOf("errorMsgsOn");
        if (errorMsgsOn !== true && errorMsgsOn !== false && errorMsgsOn !== 1 && errorMsgsOn !== 0) {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === 1) {
                errorMsgsOn = inputArray[currIndex][0];
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied parameter 'errorMsgsOn' (" + errorMsgsOn + ") and must be an expression or a single cell reference to an expression that evaluates to true or false.";
                    return [[myErrorMsg], [0]];
                }
            }
            else {
                errorMsgsOn = inputArray[currIndex][0];
            }
        }
        else {
            errorMsgsOn = inputArray[currIndex];
        }
        if (errorMsgsOn === 0 || errorMsgsOn === "false" || errorMsgsOn === false || errorMsgsOn === "" || errorMsgsOn === null) {
            errorMsgsOn = false;
        }
        else if (errorMsgsOn === 1 || errorMsgsOn === "true" || errorMsgsOn === true) {
            errorMsgsOn = true;
        }
        else if (errorMsgsOn === "") {
            errorMsgsOn = false;
        }
        else {
            myErrorMsg = fcnName + ": The supplied parameter 'errorMsgsOn' (" + errorMsgsOn + ") and must be an expression or a single cell reference to an expression that evaluates to true or false.";
            return [[myErrorMsg], [0]];
        }
        ;
        currIndex = inputArrayNames.indexOf("dataRange");
        if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][2 /* Dim2TestORlength2 */] === idx.NIST_H6 + 2) {
            dataSet = validateDataSet(dataRange, phase, CpDataRequired, binariesUsed, errorMsgsOn);
        }
        else {
            myErrorMsg = fcnName + ": The supplied dataSet range must contain " + idx.NIST_H6 + " columns. The first column contains the specie names. The top row contains the column header labels. The row count equals the number of species plus one for the header row for vapors. For liquids the row count equal twice the number of species plus two rows (one for the column headers and one for the liquid phase label).";
            return [[myErrorMsg], [0]];
        }
        if (typeof (dataSet[0][0]) === "string") {
            myErrorMsg = dataSet[0][0];
            return dataSet;
        }
        ;
        currIndex = inputArrayNames.indexOf("moles");
        moleComp = (validateMoles(dataSet, moles, arraySizes[currIndex]));
        if (moleComp[0] === -500) {
            myErrorMsg = dataSet[0][idx.globalErrmsg];
            return [[myErrorMsg], [0]];
            ;
        }
        ;
        currIndex = inputArrayNames.indexOf("temperature");
        if (typeof (temperature) === "object" && temperature.length !== "undefined") {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === 1) {
                temperature = inputArray[currIndex][0];
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied temperature (" + temperature + ") must be either a number or a reference to a single cell containing a number. ";
                    return [[myErrorMsg], [0]];
                }
                else {
                    temperature = inputArray[currIndex][0];
                }
            }
            else {
                temperature = inputArray[currIndex];
            }
        }
        if (Number(temperature) !== NaN && temperature !== "" && temperature !== -500 && temperature !== null) {
            tempC = Number(temperature);
            if (tempC > -273.15) {
                tempK = tempC + 273.15;
            }
            else {
                myErrorMsg = fcnName + ": The supplied temperature (" + tempC + ") must be either a number or a reference to a single cell containing a number. ";
                return [[myErrorMsg], [0]];
            }
        }
        else {
            tempK = -500;
        }
        ;
        currIndex = inputArrayNames.indexOf("guessedTemp");
        if (typeof (guessedTemp) === "object" && guessedTemp.length !== "undefined") {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === 1) {
                guessedTemp = inputArray[currIndex][0];
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied initialization temperature (" + guessedTemp + ") must be either a number or a reference to a single cell containing a number. ";
                    return [[myErrorMsg], [0]];
                }
            }
            else {
                errorMsgsOn = inputArray[currIndex][0];
            }
        }
        else {
            errorMsgsOn = inputArray[currIndex];
        }
        if (Number(guessedTemp) !== NaN && guessedTemp !== "" && guessedTemp !== -500 && guessedTemp !== null) {
            guessedTempC = Number(guessedTemp);
            if (guessedTempC > -273.15) {
                guessedTempK = guessedTempC + 273.15;
            }
            else {
                myErrorMsg = fcnName + ": The supplied initialization temperature (" + guessedTempC + ")must be either a number or a reference to a single cell containing a number. ";
                return [[myErrorMsg], [0]];
            }
            ;
        }
        else {
            guessedTempK = -500;
        }
        ;
        currIndex = inputArrayNames.indexOf("pressure");
        if (typeof (pressure) === "object" && pressure.length !== "undefined") {
            if (arraySizes[currIndex][0 /* arrayTest */] === true && arraySizes[currIndex][1 /* valueORlength1 */] === 1) {
                pressure = inputArray[currIndex][0];
            }
            else if (typeof (arraySizes[currIndex][2 /* Dim2TestORlength2 */]) === "number") {
                if (Number(arraySizes[currIndex][2 /* Dim2TestORlength2 */] > 1)) {
                    myErrorMsg = fcnName + ": The supplied pressure (" + pressure + ") must be either a number or a reference to a single cell containing a number. ";
                    return [[myErrorMsg], [0]];
                }
            }
            else {
                errorMsgsOn = inputArray[currIndex][0];
            }
        }
        else {
            errorMsgsOn = inputArray[currIndex];
        }
        if (Number(pressure) !== NaN && pressure !== "" && pressure !== -500 && pressure !== null) {
            if (Number(pressure) > 0) {
                pBara = Number(pressure);
            }
            else {
                myErrorMsg = fcnName + ": The supplied pressure (" + pressure + ") must be either a number or a reference to a single cell containing a number greater than zero. ";
                return [[myErrorMsg], [0]];
            }
            ;
        }
        else {
            pBara = pressure;
        }
        if (binariesUsed) {
            currIndex = inputArrayNames.indexOf("kij0");
            if (arraySizes[currIndex][0] === false && arraySizes[currIndex][2] === false && dataSet[0][idx.predictive] === false) {
                myErrorMsg = fcnName + ": The supplied useBinaries parameter is true but no kij0 range is provided. ";
                return [[myErrorMsg], [0]];
            }
            currIndex = inputArrayNames.indexOf("decomposition");
            if (arraySizes[currIndex][0] === false && arraySizes[currIndex][2] === false && dataSet[0][idx.predictive] === true) {
                myErrorMsg = fcnName + ": The supplied useBinaries parameter is true and predictive mode is on but no decomposition is provided. ";
                return [[myErrorMsg], [0]];
            }
            kij0_kijT_deComp_Array = validateBinariyArrays(dataSet, kij0, kijT, decomposition);
            if (kij0_kijT_deComp_Array[0]) {
                outputArray.push([tempK, pBara, phase, binariesUsed, errorMsgsOn, kij0_kijT_deComp_Array[0], guessedTempK]);
            }
            else {
                myErrorMsg = dataSet[0][idx.globalErrmsg];
                return [[myErrorMsg], [0]];
            }
        }
        else {
            outputArray.push([tempK, pBara, phase, binariesUsed, errorMsgsOn, false, guessedTempK]);
        }
        outputArray.push(dataSet);
        outputArray.push(moleComp);
        if (binariesUsed === true) {
            if (kij0_kijT_deComp_Array[0]) {
                outputArray.push(kij0_kijT_deComp_Array[1]);
                outputArray.push(kij0_kijT_deComp_Array[2]);
                outputArray.push(kij0_kijT_deComp_Array[3]);
            }
            else {
                myErrorMsg = dataSet[0][idx.globalErrmsg];
                return [[myErrorMsg], [0]];
            }
        }
        else {
            outputArray.push([[-500], [-500]]);
            outputArray.push([[-500], [-500]]);
            outputArray.push([[-500], [-500]]);
        }
        if (tempK !== -500) {
            if (Number(tempK) !== NaN && Number(tempK) > 0) {
                alpha_aiArray = create_alphaiArray(dataSet, tempK);
                aiArray = create_aiArray(dataSet, alpha_aiArray);
                outputArray.push(alpha_aiArray);
                outputArray.push(aiArray);
            }
            else {
                myErrorMsg = dataSet[0][idx.globalErrmsg];
                return [[myErrorMsg], [0]];
            }
        }
        else {
            outputArray.push([-500]);
            outputArray.push([-500]);
        }
        dataSet[0][idx.localWarnings] = returnWarnings;
        dataSet[0][idx.globalErrmsg] = dataSet[0][idx.globalErrmsg];
        return outputArray;
    }
    catch (myErrorHandler) {
        return [-500, myErrorHandler.message];
    }
}
/*****************************************************************************/
/**
* Calculates vapor phase derivatives and other parameters of the PPR1978 EPS given T (C), P (pbara), mole amounts or composition.
*
* @customfunction
*/
function Derivatives(dataRange, temperature, pressure, moles, useBinaries, kij0, kijT, decomposition, returnUnits, errMsgsOn) {
    if (returnUnits === void 0) { returnUnits = false; }
    if (errMsgsOn === void 0) { errMsgsOn = false; }
    try {
        /***************************************************************************
        'This function calculates the calculates the derivatives of the PR1978 EOS.
        '***************************************************************************/
        var myErrorMsg = "";
        var fcnName = "Derivatives";
        var Phase = "vapor";
        var outputArray = [];
        var binaries = [];
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0];
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        if (dataSet[0][idx.globalErrmsg] !== "") {
            myErrorMsg = dataSet[0].toString();
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
        }
        if (tempK === -500 || pBara === -500 || phase === "-500" || moleComp[0] === -500) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (dataSet[0][idx.binariesUsed] === true) {
            if (validateBinariyArrays(dataSet, kij0, kijT, decomposition)) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
            }
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        outputArray = calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries);
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.Derivatives = Derivatives;
/***************************************************************************** */
function derivativesUnits() {
    try {
        var outputArray = [];
        outputArray.push("dadT at constant V (m^6 bar/mol^2-K)");
        outputArray.push("dPdv at constant T (bar/(m3/mol))");
        outputArray.push("dPdT at constant V (bar/K)");
        outputArray.push("dadT at constant P (m3/mol-K)");
        outputArray.push("dBdT at constant P (1/K)");
        outputArray.push("dZdT at constant P (1/K)");
        outputArray.push("dVdT at constant P (m3/mol-K)");
        outputArray.push("sum_b (m^3/mol)");
        outputArray.push("sum_a (m^6 bara/mol^2)");
        outputArray.push("A");
        outputArray.push("B");
        outputArray.push("Z");
        outputArray.push("v (m3/mol)");
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.derivativesUnits = derivativesUnits;
/***************************************************************************** */
/**
* Calculates the flash result given T (C), P (pbara), mole amounts or composition.
*
* @customfunction
*/
function FlashTP(dataRange, temperature, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        /***************************************************************************
        'This function calculates the PR1978 EOS vapor fraction, vapor composition
        'and liquid composition for a constant T & P flash.
        '***************************************************************************/
        var UsingDewOrBubbleFunction = false;
        var CounterLimit1 = 0;
        var CounterLimit2 = 0;
        var Counter1 = 0;
        var Counter2 = 0;
        var Initial_Psi = 0;
        var SumRedfordRiceEq = 0; //'<= Rachford Rice;
        var SumRedfordRiceEqPrime = 0; //'<= derivitive of Rachford Rice
        var LiquidFugacity = 0;
        var VaporFugacity = 0;
        var FugacityCheck = 0;
        var SUMx = 0;
        var SUMy = 0;
        var tempC = 0;
        var xi_Array = [];
        var yi_Array = [];
        var Ki = [];
        var Psi_New = 0;
        var Psi_Old = 0;
        var dewTemp = [-273.15];
        var bubTemp = [-273.15];
        var Phi_Vap = [];
        var Phi_Liq = [];
        var DewBubKi = [];
        var outputArray = [];
        var binaries = [];
        var StreamCondition = "";
        var myErrorMsg = "";
        var fcnName = "FlashTP";
        var VaporFractionFound = false;
        var EquilibriumFound = false;
        var localBinariesUseds = false;
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, temperature, pressure, moles, "vapor", useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0];
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        localBinariesUseds = binariesUsed;
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            xi_Array.push(0);
            yi_Array.push(0);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies] + 2; i++) {
            Phi_Vap.push(0);
            Phi_Liq.push(0);
            DewBubKi.push(0);
        }
        CounterLimit1 = 2000;
        CounterLimit2 = 2000;
        for (var i = 0; i < 2 * (dataSet[0][idx.iSpecies]) + 1; i++) {
            outputArray.push(0);
        }
        Ki = calculate_Wilson_K(dataSet, tempK, pBara); //'<Initialize Ki values with Wilson method
        Initial_Psi = 0.5;
        Psi_New = Initial_Psi;
        while (EquilibriumFound === false) {
            while (VaporFractionFound === false) {
                SumRedfordRiceEq = 0;
                SumRedfordRiceEqPrime = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (moleComp[i] > 0) {
                        SumRedfordRiceEq = SumRedfordRiceEq + moleComp[i] * (Ki[i] - 1) / (Psi_New * Ki[i] + 1 - Psi_New);
                        SumRedfordRiceEqPrime = SumRedfordRiceEqPrime + moleComp[i] * Math.pow((Ki[i] - 1), 2) / Math.pow((Psi_New * (Ki[i] - 1) + 1), 2);
                    }
                }
                Psi_Old = Psi_New;
                Psi_New = Psi_New + SumRedfordRiceEq / SumRedfordRiceEqPrime;
                if (Psi_New < 0) {
                    Psi_New = Psi_Old / 2;
                }
                if (Psi_New > 1) {
                    Psi_New = (Psi_Old + 1) / 2;
                }
                if (Psi_New < Math.pow(10, -8) && Psi_New >= 0) {
                    if (UsingDewOrBubbleFunction === false) {
                        UsingDewOrBubbleFunction = true;
                        DewBubKi = BubbleT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true); //'<= Get Ki near Bubble point temperature ) { try again.
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        if (tempC <= DewBubKi[0] || DewBubKi[0] === -273.15) { //'DewBubKi[0] = bubble temperature, DewBubKi(1)...DewBubKi(n) are Ki's
                            StreamCondition = "At Or Below Bubble Point";
                            if (DewBubKi[0] === -273.15) {
                                myErrorMsg = "FlashTP bubble point test failed. Vapor fraction does not appear to exist.";
                            }
                            VaporFractionFound = true;
                            EquilibriumFound = true;
                        }
                        if (StreamCondition === "") {
                            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) { // '<Flash with Wilson Ki initialization failed to converge so retry with Ki's from Dew or Bubble point calculation.
                                if (moleComp[i] > Math.pow(10, -35)) {
                                    Ki[i] = moleComp[i] / DewBubKi[i + 2];
                                }
                                else {
                                    Ki[i] = Math.pow(10, 35); // '<= This prevent overflow errors.
                                }
                            }
                        }
                    }
                    else {
                        StreamCondition = "At Or Below Bubble Point";
                        VaporFractionFound = true;
                        EquilibriumFound = true;
                    }
                }
                if (1 - Psi_New < Math.pow(10, -8) && Psi_New <= 1) {
                    if (UsingDewOrBubbleFunction === false) {
                        UsingDewOrBubbleFunction = true;
                        DewBubKi = DewT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true); //'<= Get Ki near Dew point temperature ) { try again.
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        if (tempC >= DewBubKi[0] || DewBubKi[0] === -273.15) { //'DewBubKi[0] = dew temperature, DewBubKi(1)...DewBubKi(n) are Ki's
                            StreamCondition = "At or Above Dew Point";
                            if (DewBubKi[0] === -273.15) {
                                myErrorMsg = "FlashTP dew point test failed. Liquid phase does not appear to exist.";
                            }
                            VaporFractionFound = true;
                            EquilibriumFound = true;
                        }
                        if (StreamCondition === "") {
                            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) { //'<Flash with Wilson Ki initialization failed to converge so retry with Ki's from Dew or Bubble point calculation.
                                if (moleComp[i] > Math.pow(10, -35)) {
                                    Ki[i] = moleComp[i] / DewBubKi[i + 2];
                                }
                                else {
                                    Ki[i] = Math.pow(10, 35); //'<= This prevent overflow errors
                                }
                            }
                        }
                    }
                    else {
                        StreamCondition = "At or Above Dew Point";
                        VaporFractionFound = true;
                        EquilibriumFound = true;
                    }
                }
                if (Math.abs(1 - Math.abs(Psi_New / Psi_Old)) < Math.pow(10, -8) && StreamCondition === "") {
                    VaporFractionFound = true;
                }
                Counter1 = Counter1 + 1;
                if (Counter1 + 1 > CounterLimit1) {
                    myErrorMsg = "Flash failed to converge. Too many iterations in Psi calculation.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
            } //loop
            VaporFractionFound = false;
            if (StreamCondition === "") {
                SUMx = 0;
                SUMy = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (moleComp[i] > 0) {
                        xi_Array[i] = moleComp[i] / (Psi_New * Ki[i] + 1 - Psi_New); //'<= if(xi or yi calculate to below zero ) { need to set xi or yi to zero
                        yi_Array[i] = moleComp[i] * Ki[i] / (Psi_New * Ki[i] + 1 - Psi_New);
                        SUMx = SUMx + xi_Array[i];
                        SUMy = SUMy + yi_Array[i];
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (moleComp[i] > 0) {
                        xi_Array[i] = xi_Array[i] / SUMx;
                        yi_Array[i] = yi_Array[i] / SUMy;
                    }
                }
                LiquidFugacity = 0;
                VaporFugacity = 0;
                FugacityCheck = 0;
                Phi_Vap = calculate_Phi(dataSet, "vapor", yi_Array, tempK, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Vap[dataSet[0][idx.iSpecies] + 1] === -500) {
                    if (UsingDewOrBubbleFunction === false) {
                        dewTemp = DewT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true);
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        bubTemp = BubbleT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true);
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        if (dewTemp[0] !== -273.15) {
                            if (tempC >= dewTemp[0]) {
                                StreamCondition = "At or Above Dew Point";
                                EquilibriumFound = true;
                            }
                        }
                        if (bubTemp[0] !== -273.15) {
                            if (tempC <= bubTemp[0]) {
                                StreamCondition = "At Or Below Bubble Point";
                                EquilibriumFound = true;
                            }
                        }
                        if (StreamCondition === "") {
                            myErrorMsg = "Flash failed to converge. Error returned from calculate_Phi.";
                            throw new Error(fcnName + ": " + myErrorMsg);
                        }
                    }
                }
                Phi_Liq = calculate_Phi(dataSet, "liquid", xi_Array, tempK, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Liq[dataSet[0][idx.iSpecies] + 1] === -500) {
                    if (UsingDewOrBubbleFunction === false) {
                        dewTemp = DewT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true);
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        bubTemp = BubbleT(dataRange, pBara, moles, false, kij0, kijT, decomposition, false, -500, true);
                        dataSet[0][idx.binariesUsed] = localBinariesUseds;
                        if (dewTemp[0] !== -273.15) {
                            if (tempC >= dewTemp[0]) {
                                StreamCondition = "At or Above Dew Point";
                                EquilibriumFound = true;
                            }
                        }
                        if (bubTemp[0] === -273.15) {
                            StreamCondition = "At Or Below Bubble Point";
                            EquilibriumFound = true;
                        }
                        if (bubTemp[0] !== -273.15) {
                            if (tempC <= bubTemp[0]) {
                                StreamCondition = "At Or Below Bubble Point";
                                EquilibriumFound = true;
                            }
                        }
                    }
                    if (StreamCondition === "") {
                        myErrorMsg = "Flash failed to converge. An error returned from calculate_Phi.";
                        throw new Error(fcnName + ": " + myErrorMsg);
                    }
                }
                if (StreamCondition === "") {
                    for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                        if (moleComp[i] > 0) {
                            LiquidFugacity = LiquidFugacity + pBara * xi_Array[i] * Phi_Liq[i];
                            VaporFugacity = VaporFugacity + pBara * yi_Array[i] * Phi_Vap[i];
                            if ((pBara * yi_Array[i] * Phi_Vap[i]) > Math.pow(10, -35)) { //'<= got errors in very low temp vapor phase calculations until decreased this from 10^-12 to 10^-35
                                Ki[i] = Ki[i] * pBara * xi_Array[i] * Phi_Liq[i] / (pBara * yi_Array[i] * Phi_Vap[i]);
                            }
                            else {
                                Ki[i] = Math.pow(10, 35);
                            }
                        }
                    }
                    FugacityCheck = Math.abs(1 - LiquidFugacity / VaporFugacity);
                    if (Math.abs(FugacityCheck) < Math.pow(10, -12)) {
                        if (Psi_New < Math.pow(10, -7)) {
                            StreamCondition = "At Or Below Bubble Point";
                            EquilibriumFound = true;
                        }
                        if (1 - Psi_New < Math.pow(10, -7) && Psi_New <= 1) {
                            StreamCondition = "At or Above Dew Point";
                            EquilibriumFound = true;
                        }
                        if (StreamCondition === "") {
                            StreamCondition = "Vapor and liquid phases exist.";
                            EquilibriumFound = true;
                        }
                    }
                }
            } //next i
            Counter2 = Counter2 + 1;
            if (Counter2 + 1 > CounterLimit2) {
                myErrorMsg = "Flash failed to converge. Too many iterations in main flash loop.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        } // loop
        if (StreamCondition === "") {
            if (myErrorMsg === "") {
                myErrorMsg = "FlashTP failed to converge'";
            }
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if (StreamCondition === "Vapor and liquid phases exist.") {
            outputArray[0] = Psi_New;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[i + 1] = yi_Array[i];
            }
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[dataSet[0][idx.iSpecies] + 1 + i] = xi_Array[i];
            }
        }
        if (StreamCondition === "At Or Below Bubble Point") {
            outputArray[0] = 0;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[i + 1] = 0;
            }
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[i + 1 + dataSet[0][idx.iSpecies]] = moleComp[i];
            }
        }
        if (StreamCondition === "At or Above Dew Point") {
            outputArray[0] = 1;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[i + 1] = moleComp[i];
            }
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                outputArray[i + 1 + dataSet[0][idx.iSpecies]] = 0;
            }
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.FlashTP = FlashTP;
/***************************************************************************** */
/**
 * Calculates the bubble point given a dataSet, mole amounts or composition and pressure. In GSheets this funciton will fail if binaries are used due to slow execution times.
 *
 * @customfunction
 */
function BubbleT(dataRange, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn, Guess, CallFromFlash) {
    if (CallFromFlash === void 0) { CallFromFlash = false; }
    try {
        /***************************************************************************
        'This function calculates the PR1978 EOS bubble point.
        '***************************************************************************/
        var HiLoTemp_Count = 0;
        var Upper_yi_Bub_Count = 0;
        var TBub_Count = 0;
        var Lower_yi_Bub_Count = 0;
        var ConvergenceSum = 0;
        var yi_Sum = 0;
        var yi_Low_Sum = 0;
        var yi_Hi_Sum = 0;
        var yi_New_Sum = 0;
        var T_Low = 0;
        var T_Hi = 0;
        var T_New = 0;
        var yi_Initial_Sum = 0;
        var T_Bub = 0;
        var FugacityTest = 0;
        var Ki = [];
        var xi_Array = [];
        var yi_Array = [];
        var Ki_Old = [];
        var Ki_PR = [];
        var yi_Bub = [];
        var yi_Old = [];
        var Phi_Vap = [];
        var Phi_Liq = [];
        var outputArray = [];
        var myErrorMsg = "";
        var fcnName = "BubbleT";
        var yiBub_Equals_yiOld = false;
        var HiAndLoTempsFound = false;
        var BubT_Found = false;
        var binaries = [];
        var initialTempC = 0;
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, -500, pressure, moles, "vapor", useBinaries, kij0, kijT, decomposition, errMsgsOn, Guess, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var errorMsgsOn = inputDataArray[idx.valuesArray][idx.errsOn].valueOf();
        var guess = inputDataArray[idx.valuesArray][idx.guessT].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var alpha_aiArray = inputDataArray[idx.alphaArray];
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (pBara === -500 || moleComp[0] === -500) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        Upper_yi_Bub_Count = 0;
        TBub_Count = 0;
        Lower_yi_Bub_Count = 0;
        HiLoTemp_Count = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            yi_Old.push(0);
            Ki.push(0);
            xi_Array.push(0);
            yi_Array.push(0);
            Ki_Old.push(0);
            Ki_PR.push(0);
            yi_Bub.push(0);
        }
        if (guess !== -500) {
            T_Bub = guess;
        }
        else {
            initialTempC = calculate_T_BubDew_Est([[-500], [-500]], -500, [-500], "bubble", errorMsgsOn, dataSet, moleComp, pBara);
            if (initialTempC !== 0) {
                T_Bub = initialTempC + 273.15; //'Index 0 = Bubble Point and Index 1 = Dew Point
            }
            else {
                T_Bub = 0;
                myErrorMsg = "Calculate_T_BubDew_Est calculation failed to provide bubble T estimate.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        yi_Initial_Sum = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            Ki_Old[i] = Math.pow(dataSet[i][idx.pc], ((1 / T_Bub - 1 / dataSet[i][idx.tb]) / (1 / dataSet[i][idx.tc] - 1 / dataSet[i][idx.tb]))) / pBara;
            yi_Bub[i] = moleComp[i] * Ki_Old[i];
            yi_Initial_Sum = yi_Initial_Sum + yi_Bub[i];
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            yi_Old[i] = yi_Bub[i] / yi_Initial_Sum;
        }
        while (HiAndLoTempsFound === false) {
            HiLoTemp_Count = HiLoTemp_Count + 1;
            if (HiLoTemp_Count > 2000) {
                myErrorMsg = "HiLoTemp_Count > 2000.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                yi_Bub[i] = moleComp[i] * Ki_Old[i];
            }
            while (yiBub_Equals_yiOld === false) {
                Upper_yi_Bub_Count = Upper_yi_Bub_Count + 1;
                if (Upper_yi_Bub_Count > 2000) {
                    myErrorMsg = "Upper_yi_Bub_Count > " + Upper_yi_Bub_Count;
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Old[i] = yi_Bub[i].valueOf();
                }
                yi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Sum = yi_Sum + yi_Bub[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = yi_Old[i] / yi_Sum;
                }
                alpha_aiArray = create_alphaiArray(dataSet, T_Bub);
                aiArray = create_aiArray(dataSet, alpha_aiArray);
                if (dataSet[0][idx.binariesUsed] === true) {
                    binaries = calculate_binaries(dataSet, T_Bub, kij0Array, kijTArray, aiArray, decompArray);
                    if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                        throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                    }
                }
                Phi_Liq = calculate_Phi(dataSet, "liquid", moleComp, T_Bub, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Liq[dataSet[0][idx.iSpecies] + 1] === -500) {
                    myErrorMsg = "Liquid phase Phi error in inner upper loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                Phi_Vap = calculate_Phi(dataSet, "vapor", yi_Bub, T_Bub, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Vap[dataSet[0][idx.iSpecies] + 1] === -500) {
                    myErrorMsg = "Vapor phase Phi error in inner upper loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (Phi_Vap[i] > Math.pow(10, -35)) {
                        Ki_PR[i] = Phi_Liq[i] / Phi_Vap[i];
                    }
                    else {
                        Ki_PR[i] = Math.pow(10, 35);
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = moleComp[i] * Ki_PR[i];
                }
                yi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Sum = yi_Sum + yi_Bub[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = yi_Bub[i] / yi_Sum;
                }
                ConvergenceSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (yi_Old[i] !== 0) {
                        ConvergenceSum = ConvergenceSum + Math.abs(((yi_Bub[i] / yi_Old[i]) - 1));
                    }
                }
                if (ConvergenceSum < Math.pow(10, -5)) {
                    yiBub_Equals_yiOld = true;
                }
            } //'<= HiAndLoTempsFound Loop
            yiBub_Equals_yiOld = false;
            if (HiLoTemp_Count === 1) {
                yi_Low_Sum = yi_Sum - 1;
                yi_Hi_Sum = yi_Sum - 1;
                T_Low = T_Bub;
                T_Hi = T_Bub;
            }
            if (yi_Sum > 1) {
                T_Hi = T_Bub;
                yi_Low_Sum = yi_Sum - 1;
                T_Bub = T_Bub / 1.01;
            }
            else {
                T_Low = T_Bub;
                yi_Hi_Sum = yi_Sum - 1;
                T_Bub = T_Bub * 1.0101;
            }
            if (yi_Low_Sum * yi_Hi_Sum < 0 && Math.abs(yi_Hi_Sum) > Math.pow(10, -5) && Math.abs(yi_Low_Sum) > Math.pow(10, -5)) {
                HiAndLoTempsFound = true;
            }
        } //'<= yiBub_Equals_yiOld
        T_New = (T_Hi + T_Low) / 2;
        alpha_aiArray = create_alphaiArray(dataSet, T_New);
        aiArray = create_aiArray(dataSet, alpha_aiArray);
        if (dataSet[0][idx.binariesUsed] === true) {
            binaries = calculate_binaries(dataSet, T_Bub, kij0Array, kijTArray, aiArray, decompArray);
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        while (BubT_Found === false) {
            TBub_Count = TBub_Count + 1;
            if (TBub_Count === 2000) {
                myErrorMsg = "Warning - DewT_Count > 2000.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            T_New = (T_Hi + T_Low) / 2;
            yiBub_Equals_yiOld = false;
            while (yiBub_Equals_yiOld === false) {
                Lower_yi_Bub_Count = Lower_yi_Bub_Count + 1;
                if (Lower_yi_Bub_Count > 2000) {
                    myErrorMsg = "Warning - Lower_xi_Dew_Count  > 2000.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Old[i] = yi_Bub[i].valueOf();
                }
                yi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Sum = yi_Sum + yi_Bub[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = yi_Old[i] / yi_Sum;
                }
                alpha_aiArray = create_alphaiArray(dataSet, T_New);
                aiArray = create_aiArray(dataSet, alpha_aiArray);
                Phi_Liq = calculate_Phi(dataSet, "liquid", moleComp, T_New, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Liq[dataSet[0][idx.iSpecies] + 1] === -500) {
                    myErrorMsg = "Liquid phase Phi error in inner lower loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                Phi_Vap = calculate_Phi(dataSet, "vapor", yi_Bub, T_New, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Vap[dataSet[0][idx.iSpecies] + 1] === -500) {
                    myErrorMsg = "Vapor phase Phi error in inner lower loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                if (Math.abs(Phi_Vap[dataSet[0][idx.iSpecies]] - Phi_Liq[dataSet[0][idx.iSpecies]]) < Math.pow(10, -5)) {
                    myErrorMsg = "Trival solution convergence in lower inner loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (Phi_Vap[i] > Math.pow(10, -35)) {
                        Ki_PR[i] = Phi_Liq[i] / Phi_Vap[i];
                    }
                    else {
                        Ki_PR[i] = Math.pow(10, 35);
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = moleComp[i] * Ki_PR[i];
                }
                yi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Sum = yi_Sum + yi_Bub[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    yi_Bub[i] = yi_Bub[i] / yi_Sum;
                }
                ConvergenceSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (yi_Old[i] !== 0) {
                        ConvergenceSum = ConvergenceSum + Math.abs((yi_Bub[i] / yi_Old[i]) - 1);
                    }
                }
                if (ConvergenceSum < Math.pow(10, -10)) {
                    yiBub_Equals_yiOld = true;
                    ;
                }
            } //<= yiBub_Equals_yiOld Loop
            yi_New_Sum = yi_Sum - 1;
            if (yi_Low_Sum * yi_New_Sum > 0) {
                yi_Low_Sum = yi_New_Sum;
                T_Hi = T_New;
            }
            else {
                yi_Hi_Sum = yi_New_Sum;
                T_Low = T_New;
            }
            if (Math.abs(T_Hi - T_Low) < 0.01) {
                BubT_Found = true;
            }
        } //'<= BubT_Found Loop
        FugacityTest = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            FugacityTest = FugacityTest + Math.abs(Phi_Liq[i] * moleComp[i] - yi_Bub[i] * Phi_Vap[i]);
        }
        if (FugacityTest > Math.pow(10, -2)) { //'<= Not holding a very tight tolerance for(fugacity at the dew point.
            myErrorMsg = "Dew temperature equilibrium test failed. Returned dew temperature may be inacurate";
        }
        outputArray[0] = T_New - 273.15;
        if (guess === -500) {
            outputArray[1] = initialTempC;
        }
        else {
            outputArray[1] = guess;
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray[i + 2] = yi_Bub[i];
        }
        if (myErrorMsg !== "" || dataSet[0][idx.globalErrmsg] !== "") { //<=Used for warnings and to clear comments when errors are eliminated.
            if (myErrorMsg === "") {
                myErrorMsg = "none";
            }
            if (dataSet[0][idx.globalErrmsg] === "") {
                dataSet[0][idx.globalErrmsg] = "none";
            }
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.BubbleT = BubbleT;
/****************************************************************************** */
/**
 * Calculates the dew point given a dataSet, mole amounts or composition and pressure. In GSheets this funciton will fail if binaries are used due to slow execution times.
 *
 * @customfunction
 */
function DewT(dataRange, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn, Guess, CallFromFlash) {
    if (CallFromFlash === void 0) { CallFromFlash = false; }
    try {
        /***************************************************************************
        'This function calculates the PR1978 EOS dew point.
        '***************************************************************************/
        var HiLoTemp_Count = 0;
        var Upper_xi_Dew_Count = 0;
        var DewT_Count = 0;
        var Lower_xi_Dew_Count = 0;
        var ConvergenceSum = 0;
        var xi_Sum = 0;
        var xi_Low_Sum = 0;
        var xi_Hi_Sum = 0;
        var xi_New_Sum = 0;
        var T_Low = 0;
        var T_Hi = 0;
        var T_New = 0;
        var initialTempC = 0;
        var xi_Initial_Sum = 0;
        var T_Dew = 0;
        var VaporFugacity = 0;
        var LiquidFugacity = 0;
        var FugacityTest = 0;
        var Ki_Old = [];
        var Ki_PR = [];
        var xi_Dew = [];
        var xi_Old = [];
        var xi_Array = [];
        var yi_Array = [];
        var Ki = [];
        var Phi_Vap = [];
        var Phi_Liq = [];
        var outputArray = [];
        var myErrorMsg = "";
        var fcnName = "DewT";
        var xiDew_Equals_xiOld = false;
        var HiAndLoTempsFound = false;
        var DewT_Found = false;
        var binaries = [];
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, -500, pressure, moles, "vapor", useBinaries, kij0, kijT, decomposition, errMsgsOn, Guess, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var guess = inputDataArray[idx.valuesArray][idx.guessT].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var errorMsgsOn = inputDataArray[idx.valuesArray][idx.errsOn].valueOf();
        var alpha_aiArray = inputDataArray[idx.alphaArray];
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (pBara === -500 || moleComp[0] === -500) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (!inputDataArray[idx.valuesArray][idx.validBinaries] && binariesUsed) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        Upper_xi_Dew_Count = 0;
        DewT_Count = 0;
        Lower_xi_Dew_Count = 0;
        HiLoTemp_Count = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            xi_Old.push(0);
            Ki.push(0);
            xi_Array.push(0);
            yi_Array.push(0);
            Ki_Old.push(0);
            Ki_PR.push(0);
            xi_Dew.push(0);
        }
        if (guess !== -500) {
            T_Dew = guess;
        }
        else {
            initialTempC = calculate_T_BubDew_Est([[-500], [-500]], -500, [-500], "dew", errorMsgsOn, dataSet, moleComp, pBara);
            if (initialTempC !== 0) {
                T_Dew = initialTempC + 273.15; //'Index 0 = Bubble Point and Index 1 = Dew Point
            }
            else {
                T_Dew = 0;
                myErrorMsg = "Calculate_T_BubDew_Est calculation failed to provide bubble T estimate.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        xi_Initial_Sum = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            Ki_Old[i] = Math.pow(dataSet[i][idx.pc], ((1 / T_Dew - 1 / dataSet[i][idx.tb]) / (1 / dataSet[i][idx.tc] - 1 / dataSet[i][idx.tb]))) / pBara;
            xi_Dew[i] = moleComp[i] / Ki_Old[i];
            xi_Initial_Sum = xi_Initial_Sum + xi_Dew[i];
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            xi_Old[i] = xi_Dew[i] / xi_Initial_Sum;
        }
        while (HiAndLoTempsFound === false) {
            HiLoTemp_Count = HiLoTemp_Count + 1;
            if (HiLoTemp_Count > 2000) {
                myErrorMsg = "Warning: HiLoTemp_Count  > 2000.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                xi_Dew[i] = moleComp[i] / Ki_Old[i];
            }
            while (xiDew_Equals_xiOld === false) {
                Upper_xi_Dew_Count = Upper_xi_Dew_Count + 1;
                if (Upper_xi_Dew_Count > 2000) {
                    myErrorMsg = "Upper_xi_Dew_Count > 1000";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                xi_Old = xi_Dew.slice(0);
                xi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Sum = xi_Sum + xi_Dew[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = xi_Old[i] / xi_Sum;
                }
                if (binariesUsed) {
                    binaries = calculate_binaries(dataSet, T_Dew, kij0, kijT, aiArray, decompArray);
                }
                alpha_aiArray = create_alphaiArray(dataSet, T_Dew);
                aiArray = create_aiArray(dataSet, alpha_aiArray);
                if (dataSet[0][idx.binariesUsed] === true) {
                    binaries = calculate_binaries(dataSet, T_Dew, kij0Array, kijTArray, aiArray, decompArray);
                    if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                        throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                    }
                }
                Phi_Liq = calculate_Phi(dataSet, "liquid", xi_Dew, T_Dew, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Liq[dataSet[0][idx.iSpecies] + 2] === -500) {
                    myErrorMsg = "Liquid phase Phi error in inner upper loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                Phi_Vap = calculate_Phi(dataSet, "vapor", moleComp, T_Dew, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Vap[dataSet[0][idx.iSpecies] + 2] === -500) {
                    myErrorMsg = "Vapor phase Phi error in inner upper loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (Phi_Vap[i] > Math.pow(10, -35)) {
                        Ki_PR[i] = Phi_Liq[i] / Phi_Vap[i];
                    }
                    else {
                        Ki_PR[i] = Math.pow(10, 35);
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = moleComp[i] / Ki_PR[i];
                }
                xi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Sum = xi_Sum + xi_Dew[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = xi_Dew[i] / xi_Sum;
                }
                ConvergenceSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (xi_Old[i] !== 0) {
                        ConvergenceSum = ConvergenceSum + Math.abs(((xi_Dew[i] / xi_Old[i]) - 1));
                    }
                }
                if (ConvergenceSum < Math.pow(10, -5)) {
                    xiDew_Equals_xiOld = true;
                }
            } // loop
            xiDew_Equals_xiOld = false;
            if (HiLoTemp_Count === 1) {
                xi_Low_Sum = xi_Sum - 1;
                xi_Hi_Sum = xi_Sum - 1;
                T_Low = T_Dew;
                T_Hi = T_Dew;
            }
            if (xi_Sum < 1) {
                T_Hi = T_Dew;
                xi_Hi_Sum = xi_Sum - 1;
                T_Dew = T_Dew / 1.01;
            }
            else {
                T_Low = T_Dew;
                xi_Low_Sum = xi_Sum - 1;
                T_Dew = T_Dew * 1.0101;
            }
            if (xi_Low_Sum * xi_Hi_Sum < 0 && Math.abs(xi_Low_Sum) > Math.pow(10, -5) && Math.abs(xi_Hi_Sum) > Math.pow(10, -5)) {
                HiAndLoTempsFound = true;
            }
        } // loop
        alpha_aiArray = create_alphaiArray(dataSet, (T_Hi + T_Low) / 2);
        aiArray = create_aiArray(dataSet, alpha_aiArray);
        if (dataSet[0][idx.binariesUsed] === true) {
            binaries = calculate_binaries(dataSet, (T_Hi + T_Low) / 2, kij0Array, kijTArray, aiArray, decompArray);
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        while (DewT_Found === false) {
            DewT_Count = DewT_Count + 1;
            //console.log(`DewT_Count = ${DewT_Count}`)
            if (DewT_Count === 2000) {
                myErrorMsg = "Warning - DewT_Count > 2000.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            T_New = (T_Hi + T_Low) / 2;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                xi_Dew[i] = moleComp[i] / Ki_Old[i];
            }
            xiDew_Equals_xiOld = false;
            while (xiDew_Equals_xiOld === false) {
                Lower_xi_Dew_Count = Lower_xi_Dew_Count + 1;
                if (Lower_xi_Dew_Count > 2000) {
                    myErrorMsg = "Warning - Lower_xi_Dew_Count  > 2000.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                xi_Old = xi_Dew.slice(0);
                xi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Sum = xi_Sum + xi_Dew[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = xi_Old[i] / xi_Sum;
                }
                alpha_aiArray = create_alphaiArray(dataSet, T_New);
                aiArray = create_aiArray(dataSet, alpha_aiArray);
                Phi_Liq = calculate_Phi(dataSet, "liquid", xi_Dew, T_New, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Liq[dataSet[0][idx.iSpecies] + 2] === -500) {
                    myErrorMsg = "Liquid phase Phi error in inner lower loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                Phi_Vap = calculate_Phi(dataSet, "vapor", moleComp, T_New, pBara, binariesUsed, aiArray, binaries);
                if (Phi_Vap[dataSet[0][idx.iSpecies] + 2] === -500) {
                    myErrorMsg = "Vapor phase Phi error in inner lower loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                if (Math.abs(Phi_Vap[dataSet[0][idx.iSpecies]] - Phi_Liq[dataSet[0][idx.iSpecies]]) < Math.pow(10, -5)) {
                    myErrorMsg = "Trival solution convergence in lower inner loop.";
                    throw new Error(fcnName + ": " + myErrorMsg);
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (Phi_Vap[i] > Math.pow(10, -35)) {
                        Ki_PR[i] = Phi_Liq[i] / Phi_Vap[i];
                    }
                    else {
                        Ki_PR[i] = Math.pow(10, 35);
                    }
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = moleComp[i] / Ki_PR[i];
                }
                xi_Sum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Sum = xi_Sum + xi_Dew[i];
                }
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    xi_Dew[i] = xi_Dew[i] / xi_Sum;
                }
                ConvergenceSum = 0;
                for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                    if (xi_Old[i] !== 0) {
                        ConvergenceSum = ConvergenceSum + Math.abs((xi_Dew[i] / xi_Old[i]) - 1);
                    }
                }
                if (ConvergenceSum < Math.pow(10, -10)) {
                    xiDew_Equals_xiOld = true;
                }
            } // inner upper loop
            xi_New_Sum = xi_Sum - 1;
            if (xi_Low_Sum * xi_New_Sum > 0) {
                xi_Low_Sum = xi_New_Sum;
                T_Low = T_New;
            }
            else {
                xi_Hi_Sum = xi_New_Sum;
                T_Hi = T_New;
            }
            if (Math.abs(T_Hi - T_Low) < 0.01) {
                DewT_Found = true;
            }
        } //outter upper loop
        VaporFugacity = 0;
        LiquidFugacity = 0;
        FugacityTest = 0;
        ;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            VaporFugacity = VaporFugacity + Phi_Vap[i] * moleComp[i];
            LiquidFugacity = LiquidFugacity + Phi_Liq[i] * xi_Dew[i];
        }
        FugacityTest = VaporFugacity - LiquidFugacity;
        if (FugacityTest > Math.pow(10, -2)) { //'<= Not holding a very tight tolerance for(fugacity at the dew point.
            myErrorMsg = "Dew temperature equilibrium test failed. Returned dew temperature may be inacurate";
        }
        outputArray[0] = T_New - 273.15;
        if (guess === -500) {
            outputArray[1] = initialTempC;
        }
        else {
            outputArray[1] = guess;
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray[i + 2] = xi_Dew[i];
        }
        //if(CallFromFlash = true Then
        if (dataSet[0][idx.binariesUsed] === true) {
            binaries = calculate_binaries(dataSet, (T_Hi + T_Low) / 2, kij0, kijT, aiArray, decompArray);
        }
        if (myErrorMsg !== "" || dataSet[0][idx.globalErrmsg] !== "") {
            if (myErrorMsg === "") {
                myErrorMsg = "none";
            }
            if (dataSet[0][idx.globalErrmsg] === "") {
                dataSet[0][idx.globalErrmsg] = "none";
            }
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.DewT = DewT;
/******************************************************************************* */
/**
* Calculates compressibility given T (C), P (pbara), mole amounts, phase (vapor or liquid) and a dataSet.
*
* @customfunction
*/
function PhaseZ(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var fcnName = "PhaseZ";
        var myErrorMsg = "";
        var binaries = [];
        var inputDataArray = [];
        var z = 0;
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray, binaries);
        }
        else {
            z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed);
        }
        return z;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.PhaseZ = PhaseZ;
/******************************************************************************* */
/**
* Calculates real molar volume given T (C), P (pbara), mole amounts, phase (vapor or liquid) and a dataSet.
*
* @customfunction
*/
function Volume(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var fcnName = "PhaseZ";
        var myErrorMsg = "";
        var binaries = [];
        var inputDataArray = [];
        var z = 0;
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray, binaries);
        }
        else {
            z = calculate_PhaseZ(dataSet, phase, moleComp, tempK, pBara, binariesUsed);
        }
        return z * gasLawR * tempK / pBara;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.Volume = Volume;
/******************************************************************************* */
/**
* Calculates enthalpy (kj/kg-mole) given T (C), P (pbara), mole amounts or composition, phase (vapor or liquid) and a dataSet.
*
* @customfunction
*/
function Enthalpy(dataRange, temperature, pressure, moles, inputPhase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var fcnName = "Enthalpy";
        var myErrorMsg = "";
        var binaries = [];
        var inputDataArray = [];
        var cpRanges = [];
        var departureH = 0;
        var tempValue = 0;
        var idealGasEnthalpy = 0;
        inputDataArray = validateData(dataRange, temperature, pressure, moles, inputPhase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, true);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (tempK === -500 || pBara === -500 || phase === "-500" || moleComp[0] === -500) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (dataSet[0][idx.binariesUsed] === true) {
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        cpRanges = selectCpDataRanges(dataSet, tempK, phase);
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (cpRanges[i][cpRanges[0].length - 1] === -400) {
                myErrorMsg = "Some species in the dataset do no have valid data for " + temperature + "  C";
            }
        }
        departureH = 0;
        if (phase === "vapor") {
            if (pBara > 1) {
                departureH = calculate_H_Departure(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries); //'<= vapor phase constant pressure (Cp) enthalpy change from ideal gas conditions (25 C @ 1 bara)
                if (departureH === 987654321.123457) { //' Error flag returned from Calculate_H_Departure
                    myErrorMsg === "Enthalpy error: Departure function error: Divide by zero of log() of negative number. Check phase!";
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            else {
                departureH = 0;
            }
            idealGasEnthalpy = calculate_IdealGasEnthalpy(dataSet, moleComp, tempK, cpRanges);
            if (idealGasEnthalpy === 987654321.123457) {
                myErrorMsg = "calculate_IdealGasEnthalpy returned an error.";
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
            tempValue = departureH + idealGasEnthalpy;
        }
        if (phase === "liquid") {
            tempValue = calculate_LiquidEnthalpy(dataSet, moleComp, tempK, cpRanges);
            if (tempValue === 987654321.123457) {
                myErrorMsg = "calculate_LiquidEnthalpy returned an error.";
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        return tempValue;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.Enthalpy = Enthalpy;
/******************************************************************************* */
/**
* Calculates entropy (j/mol/K) given T (C), P (pbara), mole amounts, phase (vapor or liquid) and a dataSet.
*
* @customfunction
*/
function Entropy(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var fcnName = "Entropy";
        var myErrorMsg = "";
        var binaries = [];
        var inputDataArray = [];
        var cpRanges = [];
        var departureS = 0;
        var tempValue = 0;
        var idealGasEntropy = 0;
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, true);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var errorMsgsOn = inputDataArray[idx.valuesArray][idx.errsOn].valueOf();
        var alpha_aiArray = inputDataArray[idx.alphaArray];
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (tempK === -500 || pBara === -500 || phase === "-500" || moleComp[0] === -500) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (dataSet[0][idx.binariesUsed] === true) {
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        cpRanges = selectCpDataRanges(dataSet, tempK, phase);
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (cpRanges[i][cpRanges[0].length - 1] === -400) {
                myErrorMsg = "Some species in the dataset do no have valid data for " + temperature + "  C";
            }
        }
        departureS = 0;
        if (phase === "vapor") {
            if (pBara > 1) {
                departureS = calculate_S_Departure(dataSet, tempK, pBara, moleComp, phase, binariesUsed, binaries); //'<= vapor phase constant pressure (Cp) enthalpy change from ideal gas conditions (25 C @ 1 bara)
                if (departureS === 987654321.123457) { //' Error flag returned from Calculate_H_Departure
                    myErrorMsg === "Enthalpy error: Departure function error: Divide by zero of log() of negative number. Check phase!";
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            else {
                departureS = 0;
            }
            idealGasEntropy = calculate_IdealGasEntropy(dataSet, moleComp, tempK, cpRanges, pBara);
            if (idealGasEntropy === 987654321.123457) {
                myErrorMsg = "calculate_IdealGasEnthalpy returned an error.";
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
            tempValue = departureS + idealGasEntropy;
        }
        if (phase === "liquid") {
            tempValue = calculate_LiquidEntropy(dataSet, moleComp, tempK, cpRanges);
            if (tempValue === 987654321.123457) {
                myErrorMsg = "calculate_LiquidEnthalpy returned an error.";
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        return tempValue;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.Entropy = Entropy;
/******************************************************************************* */
function calculate_IdealGasEnthalpy(dataSet, moleComp, tempK, cpRanges) {
    try {
        /***************************************************************************
        'This function calculates the ideal gas enthalpy
        '***************************************************************************/
        var Denominator = 1;
        var J_to_kJ = 1;
        var CpEquation = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_IdealGasEnthalpy";
        var local_Tempk = 0;
        var tempNumber = 0;
        ;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (cpRanges[i][cpRanges[0].length - 1] !== -500) {
                if (cpRanges[i][cpRanges[0].length - 1] === -400) {
                    local_Tempk = dataSet[i][cpRanges[i][idx.tempK - 1]];
                }
                else {
                    local_Tempk = tempK;
                }
                if (dataSet[i][idx.cpData] === "NIST") { //'<= This means we have "NIST" type(i.e. Shomate equations & t = t/1000) formatted data.
                    Denominator = 1000;
                    J_to_kJ = 1; // 'NIST data for enthalpy is kJ/mol
                }
                else { //'<= Here we can prepare for HSC type data
                    Denominator = 1;
                    J_to_kJ = 1000; //'HSC data is j/mol
                }
                CpEquation = 0;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.tempK]] * local_Tempk / Denominator;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.tempK] + 1] * (Math.pow((local_Tempk / Denominator), 2)) / 2;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.tempK] + 2] * (Math.pow((local_Tempk / Denominator), 3)) / 3;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.tempK] + 3] * (Math.pow((local_Tempk / Denominator), 4)) / 4;
                CpEquation = CpEquation - dataSet[i][cpRanges[i][idx.tempK] + 4] / (local_Tempk / Denominator);
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.tempK] + 5] - dataSet[i][cpRanges[i][idx.tempK] + 7];
                tempNumber = tempNumber + moleComp[i] * CpEquation / J_to_kJ;
                CpEquation = 0;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.Vap298]] * 298.15 / Denominator;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 1] * Math.pow((298.15 / Denominator), 2) / 2;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 2] * Math.pow((298.15 / Denominator), 3) / 3;
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 3] * Math.pow((298.15 / Denominator), 4) / 4;
                CpEquation = CpEquation - dataSet[i][cpRanges[i][idx.Vap298] + 4] / (298.15 / Denominator);
                CpEquation = CpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 5] - dataSet[i][cpRanges[i][idx.Vap298] + 7];
                tempNumber = tempNumber - moleComp[i] * CpEquation / J_to_kJ;
            }
        }
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempNumber * 1000; //'<convert from kJmols to kJ/kg-moles
        /*   NIST Data (units for H & S are different)
        '    Cp = heat capacity (J/mol*K)
        '    H = standard enthalpy (kJ/mol)
        '    S = standard entropy (J/mol*K)
        '    t = temperature(k) / 1000

        '   HSC Data
        '   Cp j/mol/K (units are the same for H & S)
        '   T = temperaqture(k)*/
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457; //'<=error flag
    }
}
/******************************************************************************* */
function calculate_LiquidEnthalpy(dataSet, moleComp, tempK, cpRanges) {
    try {
        /***************************************************************************
        'This function is called by the Enthalpy function.
        '***************************************************************************/
        var Denominator = 1;
        var J_to_kJ = 1;
        var cpEquation = 0;
        var NBP_Temp = 0;
        var local_Tempk = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_LiquidEnthalpy";
        var tempValue = 0;
        //&& dataSet[g + dataSet[0][idx.iSpecies] + 1][idx.cpData] !== "No Data" && dataSet[g + dataSet[0][idx.iSpecies] + 1][idx.cpData] !== "Not Found!"
        tempValue = 0;
        for (var g = 0; g < dataSet[0][idx.iSpecies]; g++) {
            if (cpRanges[g][cpRanges[0].length - 1] !== -500) {
                if (cpRanges[g][cpRanges[0].length - 1] === -400) {
                    local_Tempk = dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] - 1];
                }
                else {
                    local_Tempk = tempK;
                }
                ;
                if (dataSet[g + dataSet[0][idx.iSpecies]][idx.cpData] = "NIST") {
                    Denominator = 1000;
                    J_to_kJ = 1; //'NIST enthalpy data is already in Kj/g-mole
                }
                else {
                    Denominator = 1;
                    J_to_kJ = 1000; //'HSC data enthalpy is in j/g-mole
                }
                ;
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK]] * local_Tempk / Denominator;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 1] * Math.pow((local_Tempk / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 2] * Math.pow((local_Tempk / Denominator), 3) / 3;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 3] * Math.pow((local_Tempk / Denominator), 4) / 4;
                cpEquation = cpEquation - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 4] / (local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 5] - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 7];
                tempValue = tempValue + moleComp[g] * cpEquation / J_to_kJ;
                if (cpRanges[g][cpRanges[0].length - 1] === -400) {
                    NBP_Temp = dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] - 1];
                }
                else {
                    NBP_Temp = dataSet[g][idx.tb];
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq]] * NBP_Temp / Denominator;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 1] * Math.pow((NBP_Temp / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 2] * Math.pow((NBP_Temp / Denominator), 3) / 3;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 3] * Math.pow((NBP_Temp / Denominator), 4) / 4;
                cpEquation = cpEquation - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 4] / (NBP_Temp / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 5] - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 7];
                tempValue = tempValue - moleComp[g] * cpEquation / J_to_kJ;
                tempValue = tempValue - moleComp[g] * dataSet[g][idx.hvap] / 1000;
                if (dataSet[g][idx.cpData] === "NIST") {
                    Denominator = 1000;
                    J_to_kJ = 1;
                }
                else {
                    Denominator = 1;
                    J_to_kJ = 1000;
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap]] * dataSet[g][idx.tb] / Denominator;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 1] * Math.pow((dataSet[g][idx.tb] / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 2] * Math.pow((dataSet[g][idx.tb] / Denominator), 3) / 3;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 3] * Math.pow((dataSet[g][idx.tb] / Denominator), 4) / 4;
                cpEquation = cpEquation - dataSet[g][cpRanges[g][idx.NBPVap] + 4] / (dataSet[g][idx.tb] / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 5] - dataSet[g][cpRanges[g][idx.NBPVap] + 7];
                tempValue = tempValue + moleComp[g] * cpEquation / J_to_kJ;
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298]] * 298.15 / Denominator;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 1] * Math.pow((298.15 / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 2] * Math.pow((298.15 / Denominator), 3) / 3;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 3] * Math.pow((298.15 / Denominator), 4) / 4;
                cpEquation = cpEquation - dataSet[g][cpRanges[g][idx.Vap298] + 4] / (298.15 / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 5] - dataSet[g][cpRanges[g][idx.Vap298] + 7];
                tempValue = tempValue - moleComp[g] * cpEquation / J_to_kJ;
            }
        }
        /*'  NIST Data (units for H & S are different)
        '    Cp = heat capacity (J/mol*K)
        '    H = standard enthalpy (kJ/mol)
        '    S = standard entropy (J/mol*K)
        '    t = temperature(k) / 1000

        '   HSC Data
        '   Cp j/mol/K (units are the same for H & S)
        '   T = temperaqture(k)*/
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempValue * 1000; //' <= Convert from kJ/g-mole to kJ/kg-mole
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457; //'<=error flag
    }
}
/******************************************************************************* */
/**
* Calculates the Joule-Thompson coefficient (K/bar) of a gas given T (C), P (pbara) and mole amounts or composition.
*
* @customfunction
*/
function JT_Coef(dataRange, temperature, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        /***************************************************************************
        'This function calculates the Joule-Thompson coefficient for the PR1978 EOS.
        '***************************************************************************/
        var myErrorMsg = "";
        var fcnName = "JT_Coef";
        var CpIG = 0;
        var Cp = 0;
        var cpRanges = [];
        var CvResidual = 0;
        var CpResidual = 0;
        var d2aidT2Array = [];
        var d2adT2 = 0;
        var daidTArray = [];
        var binaries = [];
        var derivitiveArray = [];
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, temperature, pressure, moles, "vapor", useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        ;
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
        }
        derivitiveArray = calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries);
        cpRanges = selectCpDataRanges(dataSet, tempK, "vapor");
        CpIG = calculate_Cp_IGorLiquid(dataSet, moleComp, tempK, cpRanges, "vapor");
        d2aidT2Array = create_d2aidT2Array(dataSet, tempK);
        daidTArray = create_daidTArray(dataSet, aiArray, tempK);
        d2adT2 = calculate_d2adT2(dataSet, tempK, moleComp, aiArray, daidTArray, d2aidT2Array, binariesUsed, binaries);
        if ((derivitiveArray[idx.Z] + derivitiveArray[idx.b] * (1 + Math.pow(2, 0.5))) / (derivitiveArray[idx.Z] + derivitiveArray[idx.b] * (1 - Math.pow(2, 0.5))) <= 0) {
            myErrorMsg = "The natural log term in the Cv residual equation retun an error. Check phase.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (derivitiveArray[idx.sumb] <= 0) {
            myErrorMsg = "The term sum_b is less than or equal to zero. Check phase.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        CvResidual = 100000 * tempK * d2adT2 * Math.log((derivitiveArray[idx.Z] + derivitiveArray[idx.b] * (1 + Math.pow(2, 0.5))) / (derivitiveArray[idx.Z] + derivitiveArray[idx.b] * (1 - Math.pow(2, 0.5)))) / (derivitiveArray[idx.sumb] * Math.pow(8, 0.5));
        CpResidual = CvResidual + (tempK * (derivitiveArray[idx.dPdT_constV]) * derivitiveArray[idx.dVdT_constP] - gasLawR) * 100000;
        Cp = CpIG + CpResidual;
        return (1 / Cp) * (tempK * derivitiveArray[idx.dVdT_constP] - derivitiveArray[idx.vol]) * 100000;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.JT_Coef = JT_Coef;
/******************************************************************************* */
function calculate_LiquidEntropy(dataSet, moleComp, tempK, cpRanges) {
    try {
        /***************************************************************************
        'This function is called by the Enthalpy function.
        '***************************************************************************/
        var LiquidCpDataRequired = false;
        var Denominator = 1;
        var J_to_kJ = 1;
        var cpEquation = 0;
        var NBP_Temp = 0;
        var local_Tempk = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_LiquidEntropy";
        var tempValue = 0;
        tempValue = 0;
        for (var g = 0; g < dataSet[0][idx.iSpecies]; g++) {
            if (cpRanges[g][cpRanges[0].length - 1] !== -500) {
                if (cpRanges[g][cpRanges[0].length - 1] === -400) {
                    local_Tempk = dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] - 1];
                }
                else {
                    local_Tempk = tempK;
                }
                ;
                if (dataSet[g + dataSet[0][idx.iSpecies]][idx.cpData] = "NIST") {
                    Denominator = 1000;
                    J_to_kJ = 1; //'NIST enthalpy data is already in Kj/g-mole
                }
                else {
                    Denominator = 1;
                    J_to_kJ = 1000; //'HSC data enthalpy is in j/g-mole
                }
                ;
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK]] * Math.log(local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 1] * (local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 2] * Math.pow((local_Tempk / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 3] * Math.pow((local_Tempk / Denominator), 3) / 3;
                cpEquation = cpEquation - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 4] / (2 * Math.pow((local_Tempk / Denominator), 2));
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.tempK] + 6];
                tempValue = tempValue + moleComp[g] * cpEquation / J_to_kJ;
                if (cpRanges[g][cpRanges[0].length - 1] === -400) {
                    NBP_Temp = dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] - 1];
                }
                else {
                    NBP_Temp = dataSet[g][idx.tb];
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq]] * Math.log(NBP_Temp / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 1] * (NBP_Temp / Denominator);
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 2] * Math.pow((NBP_Temp / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 3] * Math.pow((NBP_Temp / Denominator), 3) / 3;
                cpEquation = cpEquation - dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 4] / (2 * Math.pow((NBP_Temp / Denominator), 2));
                cpEquation = cpEquation + dataSet[g + dataSet[0][idx.iSpecies]][cpRanges[g][idx.NBPLiq] + 6];
                tempValue = tempValue - moleComp[g] * cpEquation / J_to_kJ;
                ;
                tempValue = tempValue - moleComp[g] * dataSet[g][idx.hvap] / (dataSet[g][idx.tb]);
                if (dataSet[g][idx.cpData] === "NIST") {
                    Denominator = 1000;
                    J_to_kJ = 1;
                }
                else {
                    Denominator = 1;
                    J_to_kJ = 1000;
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap]] * Math.log(dataSet[g][idx.tb] / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 1] * (dataSet[g][idx.tb] / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 2] * Math.pow((dataSet[g][idx.tb] / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 3] * Math.pow((dataSet[g][idx.tb] / Denominator), 3) / 3;
                cpEquation = cpEquation - dataSet[g][cpRanges[g][idx.NBPVap] + 4] / (2 * Math.pow((dataSet[g][idx.tb] / Denominator), 2));
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.NBPVap] + 6];
                tempValue = tempValue + moleComp[g] * cpEquation / J_to_kJ;
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298]] * Math.log(298.15 / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 1] * (298.15 / Denominator);
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 2] * Math.pow((298.15 / Denominator), 2) / 2;
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 3] * Math.pow((298.15 / Denominator), 3) / 3;
                cpEquation = cpEquation - dataSet[g][cpRanges[g][idx.Vap298] + 4] / (2 * Math.pow((298.15 / Denominator), 2));
                cpEquation = cpEquation + dataSet[g][cpRanges[g][idx.Vap298] + 6];
                tempValue = tempValue - moleComp[g] * cpEquation / J_to_kJ;
            }
        }
        /*'  NIST Data (units for H & S are different)
        '    Cp = heat capacity (J/mol*K)
        '    H = standard enthalpy (kJ/mol)
        '    S = standard entropy (J/mol*K)
        '    t = temperature(k) / 1000

        '   HSC Data
        '   Cp j/mol/K (units are the same for H & S)
        '   T = temperaqture(k)*/
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempValue;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457; //'<=error flag
    }
}
/******************************************************************************* */
/**
* Calculates the constant volume heat capacity of a vapor (j/mol/K) of a gas given T (C), P (pbara), mole amounts.
*
* @customfunction
*/
function vaporCv(dataRange, temperature, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        /***************************************************************************
        'This function calculates the liquid, ideal gas or PR1978 EOS Cv.
        '***************************************************************************/
        var CvIG = 0;
        var CpIG = 0;
        var CvResidual = 0;
        var d2adT2 = 0;
        var myErrorMsg = "";
        var fcnName = "vaporCv";
        var Phase = "vapor";
        var derivatives = [];
        var CpRanges = [];
        var d2aidT2Array = [];
        var daidTArray = [];
        var outputArray = [];
        var binaries = [];
        var inputDataArray = [];
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, true);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
        }
        derivatives = calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries);
        if (derivatives[0] !== 987654321.12345) {
            CpRanges = selectCpDataRanges(dataSet, tempK, phase);
            CpIG = calculate_Cp_IGorLiquid(dataSet, moleComp, tempK, CpRanges, "vapor");
            CvIG = CpIG - gasLawR * 100000;
            d2aidT2Array = create_d2aidT2Array(dataSet, tempK);
            daidTArray = create_daidTArray(dataSet, aiArray, tempK);
            d2adT2 = calculate_d2adT2(dataSet, tempK, moleComp, aiArray, daidTArray, d2aidT2Array, binariesUsed, binaries);
            if ((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5))) <= 0) {
                myErrorMsg = "The natural log term in the Cv residual equation retun an error. Check phase.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            if (derivatives[idx.sumb] <= 0) {
                myErrorMsg = "The term sum_b is less than or equal to zero. Check phase.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            CvResidual = 100000 * tempK * d2adT2 * Math.log((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5)))) / (derivatives[idx.sumb] * Math.pow(8, 0.5));
            outputArray[0] = CvIG + CvResidual;
            outputArray[1] = CvIG;
            outputArray[2] = CvResidual;
        }
        else {
            myErrorMsg = "Calculate_Derivatives returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if (myErrorMsg = "") {
            myErrorMsg = dataSet[0][idx.globalErrmsg];
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.vaporCv = vaporCv;
/******************************************************************************* */
/**
* Calculates the speed of sound  (m/s) of a gas given T (C), P (pbara), mole amounts or composition
*
* @customfunction
*/
function SpeedOfSound(dataRange, temperature, pressure, moles, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        /***************************************************************************
        'This function calculates the liquid, ideal gas or PR1978 EOS Cv.
        '***************************************************************************/
        var CvIG = 0;
        var CpIG = 0;
        var CvResidual = 0;
        var CpResidual = 0;
        var aveMW = 0;
        var Cp = 0;
        var Cv = 0;
        var d2adT2 = 0;
        var myErrorMsg = "";
        var fcnName = "SpeedOfSound";
        var Phase = "vapor";
        var derivatives = [];
        var CpRanges = [];
        var d2aidT2Array = [];
        var daidTArray = [];
        var binaries = [];
        var inputDataArray = [];
        var tempValue = 0;
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
        }
        if (dataSet[0][idx.binariesUsed] === true) {
            if (validateBinariyArrays(dataSet, kij0, kijT, decomposition)) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
            }
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        derivatives = calculate_Derivatives(dataSet, tempK, pBara, moleComp, phase, binariesUsed, aiArray, binaries);
        if (derivatives[0] !== 987654321.12345) {
            CpRanges = selectCpDataRanges(dataSet, tempK, phase);
            CpIG = calculate_Cp_IGorLiquid(dataSet, moleComp, tempK, CpRanges, "vapor");
            CvIG = CpIG - gasLawR * 100000;
            d2aidT2Array = create_d2aidT2Array(dataSet, tempK);
            daidTArray = create_daidTArray(dataSet, aiArray, tempK);
            d2adT2 = calculate_d2adT2(dataSet, tempK, moleComp, aiArray, daidTArray, d2aidT2Array, binariesUsed, binaries);
            if ((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5))) <= 0) {
                myErrorMsg = "The natural log term in the Cv residual equation retun an error. Check phase.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            if (derivatives[idx.sumb] <= 0) {
                myErrorMsg = "The term sum_b is less than or equal to zero. Check phase.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            CvResidual = 100000 * tempK * d2adT2 * Math.log((derivatives[idx.Z] + derivatives[idx.b] * (1 + Math.pow(2, 0.5))) / (derivatives[idx.Z] + derivatives[idx.b] * (1 - Math.pow(2, 0.5)))) / (derivatives[idx.sumb] * Math.pow(8, 0.5));
            CpResidual = CvResidual + (tempK * (derivatives[idx.dPdT_constV]) * derivatives[idx.dVdT_constP] - gasLawR) * 100000;
            Cv = CvIG + CvResidual;
            Cp = CpIG + CpResidual;
            tempValue = derivatives[idx.vol] * Math.pow((-(Cp / Cv) * (derivatives[idx.dPdv_constT])), 0.5);
            aveMW = 0;
            for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
                aveMW = aveMW + moleComp[i] * dataSet[i][idx.mw];
            }
            tempValue = Math.pow((Math.pow(tempValue, 2) * (100000) * (1000) * (1 / aveMW)), 0.5);
        }
        else {
            myErrorMsg = "Calculate_Derivatives returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        if (myErrorMsg = "") {
            myErrorMsg = dataSet[0][idx.globalErrmsg];
        }
        return tempValue;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.SpeedOfSound = SpeedOfSound;
/******************************************************************************* */
function calculate_d2adT2(dataSet, tempK, moleComp, aiArray, daidTArray, d2aidT2Array, binariesUsed, binaries) {
    try {
        /***************************************************************************
        'The function is called by vaporCv, PhaseCp, Derivatives, SpeedOfSound and JTCoef
        'Calculates an array of values
        '***************************************************************************/
        var d2adT2Array = [];
        var fcnName = "calculate_d2adT2";
        var myErrorMsg = "";
        var tempValue = 0;
        var tempArrValue = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            d2adT2Array.push([]);
            for (var j = 0; j < dataSet[0][idx.iSpecies]; j++) {
                tempArrValue = (1 / 2) * ((Math.pow(daidTArray[i], 2) * Math.pow(aiArray[j], 0.5) / (Math.pow((Math.pow(aiArray[i], 3)), 0.5))) + (Math.pow(daidTArray[j], 2) * Math.pow(aiArray[i], 0.5) / Math.pow(Math.pow(aiArray[j], 3), 0.5)));
                tempArrValue = d2aidT2Array[i] * Math.pow(aiArray[j], 0.5) / Math.pow(aiArray[i], 0.5) + d2aidT2Array[j] * Math.pow(aiArray[i], 0.5) / Math.pow(aiArray[j], 0.5) - tempArrValue;
                tempArrValue = daidTArray[i] * daidTArray[j] / Math.pow((aiArray[i] * aiArray[j]), 0.5) + tempArrValue;
                if (binariesUsed === true) {
                    d2adT2Array[i].push(moleComp[i] * moleComp[j] * (1 - binaries[i][j]) * tempArrValue);
                }
                else {
                    d2adT2Array[i].push(moleComp[i] * moleComp[j] * tempArrValue);
                }
                tempValue = tempValue + d2adT2Array[i][j];
            }
        }
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempValue / 2;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return -500;
    }
}
/******************************************************************************* */
function calculate_Cp_IGorLiquid(dataSet, moleComp, tempK, cpRanges, phase) {
    try {
        /***************************************************************************
        'This function calculates the Cp for an ideal gas or a liquid
        '***************************************************************************/
        var Denominator = 1;
        var J_to_kJ = 1;
        var cpEquation = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_Cp_IGorLiquid";
        var m = 0;
        var local_Tempk = 0;
        var tempValue = 0;
        if (phase === "vapor") {
            m = 0;
        }
        else {
            m = dataSet[0][idx.iSpecies];
        }
        tempValue = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (cpRanges[i][cpRanges[0].length - 1] !== -500) {
                if (cpRanges[i][cpRanges[0].length - 1] === -400) {
                    local_Tempk = dataSet[i + dataSet[0][idx.iSpecies]][cpRanges[i][idx.tempK] - 1];
                }
                else {
                    local_Tempk = tempK;
                }
                if (dataSet[i + m][idx.cpData] === "NIST") { //'<= This means we have "NIST" type(i.e. Shomate equations & t = t/1000) formatted data.
                    Denominator = 1000;
                    J_to_kJ = 1;
                }
                else { //'<= Here we can test for other types of Cp data in the future - not used for now
                    Denominator = 1;
                    J_to_kJ = 1;
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[i + m][cpRanges[i][idx.tempK]];
                cpEquation = cpEquation + dataSet[i + m][cpRanges[i][idx.tempK] + 1] * (local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[i + m][cpRanges[i][idx.tempK] + 2] * Math.pow((local_Tempk / Denominator), 2);
                cpEquation = cpEquation + dataSet[i + m][cpRanges[i][idx.tempK] + 3] * Math.pow((local_Tempk / Denominator), 3);
                cpEquation = cpEquation + dataSet[i + m][cpRanges[i][idx.tempK] + 4] / Math.pow((local_Tempk / Denominator), 2);
                tempValue = tempValue + moleComp[i] * cpEquation / J_to_kJ; //'<= Cp = heat capacity (J/mol*K)
            }
        }
        /*'  NIST Data
        '    Cp = heat capacity (J/mol*K)
        '    H = standard enthalpy (kJ/mol)
        '    S = standard entropy (J/mol*K)
        '    t = temperature(k) / 1000

        '   HSC Data
        '   Cp j/mol/K
        '    T = temperaqture(k)*/
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempValue;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457;
    }
}
/******************************************************************************* */
function calculate_H_Departure(dataSet, tempK, pbara, moleComp, phase, binariesUsed, passed_aiArray, binaries) {
    if (passed_aiArray === void 0) { passed_aiArray = [-500]; }
    if (binaries === void 0) { binaries = [[-500], [-500]]; }
    try {
        /***************************************************************************
        'This function is called by the Enthalpy function
        'This function calculates the PR1978 EOS enthalpy departure function
        '***************************************************************************/
        var a = 0;
        var a0 = 0;
        var b = 0;
        var b0 = 0;
        var Z0 = 0;
        var Z = 0;
        var alpha_aiArray = [];
        var aiArray = [];
        var aij_Array = [];
        var sum_a = 0;
        var sum_b = 0;
        var dadT = 0;
        var departH = 0;
        var departH0 = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_H_Departure";
        myErrorMsg = "";
        if (passed_aiArray[0] === -500) {
            alpha_aiArray = create_alphaiArray(dataSet, tempK);
            if (alpha_aiArray[0] === -500) {
                myErrorMsg = "create_alphaiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            aiArray = create_aiArray(dataSet, alpha_aiArray);
            if (aiArray[0] === -500) {
                myErrorMsg = "create_aiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        else {
            aiArray = passed_aiArray.slice(0);
        }
        ;
        alpha_aiArray = create_alphaiArray(dataSet, tempK);
        if (alpha_aiArray[0] === -500) {
            myErrorMsg = "create_alphaiArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        aij_Array = create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK);
        if (aij_Array[0][0] === -500) {
            myErrorMsg = "create_aijArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_a = calculate_sum_a(dataSet, aij_Array, moleComp);
        if (sum_a === -500) {
            myErrorMsg = "calculate_sum_a returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_b = calculate_sum_b(dataSet, moleComp);
        if (sum_b === -500) {
            myErrorMsg = "calculate_sum_b returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        a = calculate_A(dataSet, sum_a, tempK, pbara);
        if (a === -500) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b = calculate_B(dataSet, sum_b, tempK, pbara);
        if (b === -500) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z = calculate_EOS_Root(dataSet, a, b, phase);
        if (Z === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error when calculating z.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        ;
        a0 = calculate_A(dataSet, sum_a, tempK, 1);
        if (a0 === -500) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b0 = calculate_B(dataSet, sum_b, tempK, 1);
        if (b0 === -500) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z0 = calculate_EOS_Root(dataSet, a0, b0, phase);
        if (Z0 === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error when calculating z0.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        ;
        dadT = calculate_dadt(dataSet, tempK, moleComp, aij_Array, alpha_aiArray);
        if ((Z + (Math.pow(2, 0.5) + 1) * b) <= 0 || (Z - (Math.pow(2, 0.5) - 1) * b) <= 0 || (2 * Math.pow(2, 0.5) * sum_b) <= 0) {
            myErrorMsg = "Check supplied Phase. The term (z + (2 ^ 0.5 + 1) * B) / (z - (2 ^ 0.5 - 1) * B) is less than or equal to zero and will cause an error in the ln() function of the Phi() expression.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        departH = 100000 * (gasLawR * tempK * (Z - 1) + (tempK * dadT - sum_a) / (2 * Math.pow(2, 0.5) * sum_b) * Math.log((Z + (Math.pow(2, 0.5) + 1) * b) / (Z - (Math.pow(2, 0.5) - 1) * b)));
        //'the 100,000 factor above converts from m3-bar/K-g-mole to kJ/kg-mole
        if ((Z0 + (Math.pow(2, 0.5) + 1) * b0) <= 0 || (Z0 - (Math.pow(2, 0.5) - 1) * b0) <= 0) {
            myErrorMsg = "Check supplied Phase. The term (z + (2 ^ 0.5 + 1) * B) / (z - (2 ^ 0.5 - 1) * B) is less than or equal to zero and will cause an error in the ln() function of the Phi() expression.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        departH0 = 100000 * (gasLawR * tempK * (Z0 - 1) + (tempK * dadT - sum_a) / (2 * Math.pow(2, 0.5) * sum_b) * Math.log((Z0 + (Math.pow(2, 0.5) + 1) * b0) / (Z0 - (Math.pow(2, 0.5) - 1) * b0)));
        //'the 100,000 factor above converts from m3-bar/K-g-mole to kJ/kg-mole
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return departH - departH0;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457;
    }
}
/******************************************************************************* */
function calculate_S_Departure(dataSet, tempK, pbara, moleComp, phase, binariesUsed, binaries, passed_aiArray) {
    if (binaries === void 0) { binaries = [[-500], [-500]]; }
    if (passed_aiArray === void 0) { passed_aiArray = [-500]; }
    try {
        /***************************************************************************
        'This function is called by the Entropy function
        'This function calculates the PR1978 EOS entropy departure function
        '***************************************************************************/
        var a = 0;
        var a0 = 0;
        var b = 0;
        var b0 = 0;
        var Z0 = 0;
        var Z = 0;
        var alpha_aiArray = [];
        var aiArray = [];
        var aij_Array = [];
        var sum_a = 0;
        var sum_b = 0;
        var dadT = 0;
        var departS = 0;
        var departS0 = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_S_Departure";
        myErrorMsg = "";
        if (passed_aiArray[0] === -500) {
            alpha_aiArray = create_alphaiArray(dataSet, tempK);
            if (alpha_aiArray[0] === -500) {
                myErrorMsg = "create_alphaiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
            aiArray = create_aiArray(dataSet, alpha_aiArray);
            if (aiArray[0] === -500) {
                myErrorMsg = "create_aiArray returned an error.";
                throw new Error(fcnName + ": " + myErrorMsg);
            }
        }
        else {
            aiArray = passed_aiArray.slice(0);
        }
        ;
        alpha_aiArray = create_alphaiArray(dataSet, tempK);
        if (alpha_aiArray[0] === -500) {
            myErrorMsg = "create_alphaiArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        aij_Array = create_aijArray(dataSet, binariesUsed, aiArray, binaries, tempK);
        if (aij_Array[0][0] === -500) {
            myErrorMsg = "create_aijArray returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_a = calculate_sum_a(dataSet, aij_Array, moleComp);
        if (sum_a === -500) {
            myErrorMsg = "calculate_sum_a returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        sum_b = calculate_sum_b(dataSet, moleComp);
        if (sum_b === -500) {
            myErrorMsg = "calculate_sum_b returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        a = calculate_A(dataSet, sum_a, tempK, pbara);
        if (a === -500) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b = calculate_B(dataSet, sum_b, tempK, pbara);
        if (b === -500) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z = calculate_EOS_Root(dataSet, a, b, phase);
        if (Z === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error when calculating Z.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        ;
        a0 = calculate_A(dataSet, sum_a, tempK, 1);
        if (a0 === -500) {
            myErrorMsg = "calculate_A returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        b0 = calculate_B(dataSet, sum_b, tempK, 1);
        if (b0 === -500) {
            myErrorMsg = "calculate_B returned an error.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        Z0 = calculate_EOS_Root(dataSet, a0, b0, phase);
        if (Z0 === -500) {
            myErrorMsg = "calculate_EOS_Root returned an error when calculating Z0.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        ;
        dadT = calculate_dadt(dataSet, tempK, moleComp, aij_Array, alpha_aiArray);
        if ((2 * Math.pow(2, 0.5) * sum_b) <= 0 || (Z - (Math.pow(2, 0.5) - 1) * b) <= 0 || (Z + (Math.pow(2, 0.5) + 1) * b) / (Z - (Math.pow(2, 0.5) - 1) * b) <= 0) {
            myErrorMsg = "Check supplied Phase. The term (z + (2 ^ 0.5 + 1) * B) / (z - (2 ^ 0.5 - 1) * B) is less than or equal to zero and will cause an error in the ln() function of the Phi() expression.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        departS = 100000 * (gasLawR * Math.log(Z - b) + (dadT / (2 * Math.pow(2, 0.5) * sum_b)) * Math.log((Z + (Math.pow(2, 0.5) + 1) * b) / (Z - (Math.pow(2, 0.5) - 1) * b)));
        if ((2 * Math.pow(2, 0.5) * sum_b) <= 0 || (Z0 - (Math.pow(2, 0.5) - 1) * b0) <= 0 || (Z0 + (Math.pow(2, 0.5) + 1) * b0) / (Z0 - (Math.pow(2, 0.5) - 1) * b0) <= 0) {
            myErrorMsg = "Check supplied Phase. The term (z + (2 ^ 0.5 + 1) * B) / (z - (2 ^ 0.5 - 1) * B) is less than or equal to zero and will cause an error in the ln() function of the Phi() expression.";
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        departS0 = 100000 * (gasLawR * Math.log(Z0 - b0) + (dadT / (2 * Math.pow(2, 0.5) * sum_b)) * Math.log((Z0 + (Math.pow(2, 0.5) + 1) * b0) / (Z0 - (Math.pow(2, 0.5) - 1) * b0)));
        //'the 100,000 factor above converts from m3-bar/K-g-mole to kJ/kg-mole
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return departS - departS0;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457;
    }
}
/******************************************************************************* */
function calculate_EOS_Root(dataSet, a, b, phase) {
    try {
        /***************************************************************************
        'This function is called by all of the PR1978 EOS functions
        'This function calculates the the root to the PR1978 EOS (reference 1)
        'This function uses the GetLargestRoot function in the findCubicRoots.js module (reference 6)
        '***************************************************************************/
        var Z = void 0;
        var myErrorMsg = "";
        var fcnName = "calculate_EOS_Root";
        Z = findCubicRoots_js_1.getCubicRoot(1, (b - 1), a - 3 * Math.pow(b, 2) - 2 * b, (-a * b + Math.pow(b, 2) + Math.pow(b, 3)), phase);
        if (Z === -500) {
            myErrorMsg = fcnName + " returned an errror. Check phase.";
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        //dataset[0][idx.globalErrmsg] = `${fcnName}: ${myErrorMsg}`
        return Z;
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return -500;
    }
}
/******************************************************************************* */
function calculate_IdealGasEntropy(dataSet, moleComp, tempK, cpRanges, pBara) {
    try {
        /***************************************************************************
        'This function calculates the ideal gas entropy
        '***************************************************************************/
        var Denominator = 0;
        var cpEquation = 0;
        var local_Tempk = 0;
        var myErrorMsg = "";
        var fcnName = "calculate_IdealGasEntropy";
        var tempValue = 0;
        tempValue = 0;
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            if (cpRanges[i][cpRanges[0].length - 1] !== -500) {
                if (cpRanges[i][cpRanges[0].length - 1] === -400) {
                    local_Tempk = dataSet[i][idx.tempK - 1];
                }
                else {
                    local_Tempk = tempK;
                }
                if (dataSet[i][idx.cpData] === "NIST") { //'<= 0 means we have "NIST" type data
                    Denominator = 1000;
                }
                else {
                    Denominator = 1;
                }
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.tempK]] * Math.log(local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.tempK] + 1] * (local_Tempk / Denominator);
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.tempK] + 2] * (Math.pow((local_Tempk / Denominator), 2)) / 2;
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.tempK] + 3] * (Math.pow((local_Tempk / Denominator), 3)) / 3; //'<= This is the only one with a minus sign
                cpEquation = cpEquation - dataSet[i][cpRanges[i][idx.tempK] + 4] / (2 * Math.pow((local_Tempk / Denominator), 2));
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.tempK] + 6];
                tempValue = tempValue + moleComp[i] * cpEquation;
                cpEquation = 0;
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.Vap298]] * Math.log(298.15 / Denominator);
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 1] * (298.15 / Denominator);
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 2] * (Math.pow((298.15 / Denominator), 2)) / 2;
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 3] * (Math.pow((298.15 / Denominator), 3)) / 3; //'<= This is the only one with a minus sign
                cpEquation = cpEquation - dataSet[i][cpRanges[i][idx.Vap298] + 4] / (2 * Math.pow((298.15 / Denominator), 2));
                cpEquation = cpEquation + dataSet[i][cpRanges[i][idx.Vap298] + 6];
                tempValue = tempValue - moleComp[i] * cpEquation;
            }
        }
        tempValue = tempValue * (1000 / 1000); //'<= convert Cp data from j/g-mole/K to kJ/kg-mole/K
        tempValue = tempValue - 100000 * gasLawR * Math.log(pBara / 1);
        dataSet[0][idx.globalErrmsg] = fcnName + ": " + myErrorMsg;
        return tempValue;
        /*'  NIST Data (units for H & S are different)
        '    Cp = heat capacity (J/mol*K)
        '    H = standard enthalpy (kJ/mol)
        '    S = standard entropy (J/mol*K)
        '    t = temperature(k) / 1000

        '   HSC Data
        '   Cp j/mol/K (units are the same for H & S)
        '   T = temperaqture(k)*/
    }
    catch (myErrorHandler) {
        dataSet[0][idx.globalErrmsg] = myErrorHandler.message;
        return 987654321.123457; //'<=error flag
    }
}
/******************************************************************************* */
/**
* Calculates the fugacity coefficients of a phase given T (C), P (pbara), mole amounts or composition, phase (vapor or liquid).
*
* @customfunction
*/
function PhasePhi(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn) {
    try {
        var myErrorMsg = "";
        var fcnName = "PhasePhi";
        var binaries = [];
        var inputDataArray = [];
        var phi = [];
        var outputArray = [];
        inputDataArray = validateData(dataRange, temperature, pressure, moles, Phase, useBinaries, kij0, kijT, decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var pBara = inputDataArray[idx.valuesArray][idx.P].valueOf();
        var phase = inputDataArray[idx.valuesArray][idx.phase].valueOf();
        var moleComp = inputDataArray[idx.moleCompArray];
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (binariesUsed) {
            if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
                binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
                if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                    throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
                }
            }
            phi = calculate_Phi(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray, binaries);
        }
        else {
            phi = calculate_Phi(dataSet, phase, moleComp, tempK, pBara, binariesUsed, aiArray);
        }
        for (var i = 0; i < dataSet[0][idx.iSpecies]; i++) {
            outputArray.push(phi[i]);
        }
        return outputArray;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.PhasePhi = PhasePhi;
/***************************************************************/
/**
* Calculates the pure component PR1978 property ki.
*
* @customfunction
*/
function calculate_ki(omega) {
    try {
        if (Number(omega) === NaN) {
            return "Parameter must be a number of a cell referece to a number representing the acentric factor.";
        }
        if (omega < 0.491) {
            return (0.37464 + 1.54226 * omega - 0.26992 * Math.pow(omega, 2));
        }
        else {
            return (0.379642 + 1.487503 * omega - 0.164423 * Math.pow(omega, 2) + 0.016666 * Math.pow(omega, 3)); //<= m or k for PR1978
        }
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.calculate_ki = calculate_ki;
/*************************************************************** */
/**
* Calculates the pure component PR1978 property bi.
*
* @customfunction
*/
function calculate_bi(tc, pc) {
    try {
        return 0.0778 * gasLawR * tc / pc;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.calculate_bi = calculate_bi;
/*************************************************************** */
function returnPredictiveBinaries(dataRange, temperature, moles, decomposition, errMsgsOn) {
    try {
        /***************************************************************************
        'This function calculates the calculates the return_kijTs of the Predictive PR1978 EOS.
        '***************************************************************************/
        var myErrorMsg = void 0;
        var fcnName = void 0;
        var inputDataArray = void 0;
        var binaries = void 0;
        fcnName = "returnBinaries";
        inputDataArray = validateData(dataRange, temperature, -500, moles, "vapor", true, [[-500][-500]], [[-500][-500]], decomposition, errMsgsOn, -500, false);
        var errorTest = inputDataArray[0][0]; // If an unrecoverable error occured during validateData() execution inputDataArray[0][0] will contain an error message otherwise it will contain the 1st vapor species MW
        if (typeof (errorTest) === "string") {
            myErrorMsg = errorTest;
            throw new Error(fcnName + ": " + myErrorMsg);
        }
        var dataSet = inputDataArray[idx.datasetArray];
        dataSet[0][idx.predictive] = true;
        var tempK = inputDataArray[idx.valuesArray][idx.T].valueOf();
        var binariesUsed = inputDataArray[idx.valuesArray][idx.binariesOn].valueOf();
        var aiArray = inputDataArray[idx.aiArray];
        var kij0Array = inputDataArray[idx.kij0Array];
        var kijTArray = inputDataArray[idx.kijTArray];
        var decompArray = inputDataArray[idx.decompArray];
        if (binariesUsed && !inputDataArray[idx.valuesArray][idx.validBinaries]) {
            throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
        }
        if (inputDataArray[idx.valuesArray][idx.validBinaries]) {
            binaries = calculate_binaries(dataSet, tempK, kij0Array, kijTArray, aiArray, decompArray);
            if (binaries[0][0] === -500 && dataSet[0][idx.binariesUsed] === true) {
                throw new Error(fcnName + ": " + dataSet[0][idx.globalErrmsg]);
            }
        }
        return binaries;
    }
    catch (myErrorHandler) {
        return myErrorHandler.message;
    }
}
exports.returnPredictiveBinaries = returnPredictiveBinaries;
//# sourceMappingURL=eosCode.js.map