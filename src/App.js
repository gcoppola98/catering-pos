import React, { useState } from 'react';

const items = [
  {
    id: "HF_0",
    name: "Inflation Buster",
    sizes: [{ name: "Tray", price: 159 }],
    category: "Hot Food"
  },

  
  
  
  
  { id: "PH_1", name: "American", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_2", name: "Italian", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_3", name: "Classic", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_4", name: "Basic", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_5", name: "Grilled Classic", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_6", name: "Eggplant Classic", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_7", name: "Grilled Veggie Deluxe", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_8", name: "Charlie Tuna", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_9", name: "15th Ave Special", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_10", name: "Extravaganza", pricePerFoot: 75, category: "Party Heroes" },
  { id: "PH_11", name: "#1", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_12", name: "#2", pricePerFoot: 39, category: "Party Heroes" },
  { id: "PH_13", name: "#3", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_14", name: "#4", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_15", name: "#5", pricePerFoot: 28, category: "Party Heroes" },
  { id: "PH_16", name: "#6", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_17", name: "#7", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_18", name: "#8", pricePerFoot: 28, category: "Party Heroes" },
  { id: "PH_19", name: "#9", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_20", name: "#10", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_21", name: "#11", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_22", name: "#12", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_23", name: "#13", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_24", name: "#14", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_25", name: "#15", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_26", name: "#16", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_27", name: "#17", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_28", name: "#18", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_29", name: "#19", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_30", name: "#20", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_31", name: "#21", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_32", name: "#23", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_33", name: "#24", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_34", name: "#25", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_35", name: "#26", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_36", name: "#27", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_37", name: "#28", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_38", name: "#29 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_39", name: "#30", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_40", name: "#31", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_41", name: "#32", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_42", name: "#33", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_43", name: "#34", pricePerFoot: 28, category: "Party Heroes" },
  { id: "PH_44", name: "#35 (Pan)", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_45", name: "#37", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_46", name: "#38", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_47", name: "#39", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_48", name: "#40", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_49", name: "#41 (Pan)", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_50", name: "#42", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_51", name: "#43", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_52", name: "#44", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_53", name: "#45", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_54", name: "#46", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_55", name: "#47", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_56", name: "#48", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_57", name: "#49 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_58", name: "#50 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_59", name: "#51", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_60", name: "#52 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_61", name: "#53 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_62", name: "#54 (Maestro)", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_63", name: "#55", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_64", name: "#56", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_65", name: "#57", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_66", name: "#58", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_67", name: "#59", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_68", name: "#60", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_69", name: "#61", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_70", name: "#62", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_71", name: "#63", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_72", name: "#64", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_73", name: "#65", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_74", name: "#66", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_75", name: "#67", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_76", name: "#68", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_77", name: "#69", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_78", name: "#70", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_79", name: "#71", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_80", name: "#72", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_81", name: "#73", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_82", name: "#74", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_83", name: "#75", pricePerFoot: 28, category: "Party Heroes" },
  { id: "PH_84", name: "#76", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_85", name: "#77", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_86", name: "#78", pricePerFoot: 38, category: "Party Heroes" },
  { id: "PH_87", name: "#79", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_88", name: "#80 (Pan)", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_89", name: "#81", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_90", name: "#82", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_91", name: "#83", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_92", name: "#84", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_93", name: "#85", pricePerFoot: 32, category: "Party Heroes" },
  { id: "PH_94", name: "#86", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_95", name: "#87 (Pan)", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_96", name: "#88", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_97", name: "#89", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_98", name: "#90 (Pan)", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_99", name: "#91", pricePerFoot: 28, category: "Party Heroes" },
  { id: "PH_100", name: "#92", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_101", name: "#93", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_102", name: "#94", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_103", name: "#95", pricePerFoot: 39, category: "Party Heroes" },
  { id: "PH_104", name: "#96", pricePerFoot: 39, category: "Party Heroes" },
  { id: "PH_105", name: "#97", pricePerFoot: 25, category: "Party Heroes" },
  { id: "PH_106", name: "#98", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_107", name: "#99", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_108", name: "#100", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_109", name: "#101", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_110", name: "#102", pricePerFoot: 33, category: "Party Heroes" },
  { id: "PH_111", name: "#103", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_112", name: "#104 (375)", pricePerFoot: 38, category: "Party Heroes" },
  { id: "PH_113", name: "#105", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_114", name: "#106", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_115", name: "#107", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_116", name: "#108", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_117", name: "#109", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_118", name: "#110", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_119", name: "#111", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_120", name: "#112", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_121", name: "#113", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_122", name: "#114", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_123", name: "#115", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_124", name: "#116", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_125", name: "#117", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_126", name: "#118", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_127", name: "#119", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_128", name: "#120", pricePerFoot: 33, category: "Party Heroes" },
  { id: "PH_129", name: "#121", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_130", name: "#122", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_131", name: "#123", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_132", name: "#124", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_133", name: "#125", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_134", name: "#126", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_135", name: "#127", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_136", name: "#128", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_137", name: "#129 (Pan)", pricePerFoot: 60, category: "Party Heroes" },
  { id: "PH_138", name: "#130", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_139", name: "#131", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_140", name: "#132", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_141", name: "#133", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_142", name: "#134", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_143", name: "#135", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_144", name: "#136", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_145", name: "#137", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_146", name: "#138", pricePerFoot: 50, category: "Party Heroes" },
  { id: "PH_147", name: "#139", pricePerFoot: 45, category: "Party Heroes" },
  { id: "PH_148", name: "#1A", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_149", name: "#2A", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_150", name: "#3A", pricePerFoot: 40, category: "Party Heroes" },
  { id: "PH_151", name: "#4A", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_152", name: "#5A", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_153", name: "#6A", pricePerFoot: 29, category: "Party Heroes" },
  { id: "PH_154", name: "#7A", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_155", name: "#8A", pricePerFoot: 35, category: "Party Heroes" },
  { id: "PH_156", name: "#9A", pricePerFoot: 30, category: "Party Heroes" },
  { id: "PH_157", name: "#10A", pricePerFoot: 26, category: "Party Heroes" },
  { id: "PH_158", name: "#11A", pricePerFoot: 30, category: "Party Heroes" },
  { id: "HF_1", name: "Baked Clams", sizes: [{ name: "Per Dozen", price: 20 }], category: "Hot Food" },
  { id: "HF_2", name: "Baked Ziti", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_3", name: "Broccoli Rabe", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_4", name: "Broccoli with Garlic & Oil (Sauteed Broccoli)", sizes: [{ name: "Half Tray", price: 45 }, { name: "Full Tray", price: 90 }], category: "Hot Food" },
  { id: "HF_5", name: "Chicken Fingers", sizes: [{ name: "Half Tray", price: 45 }, { name: "Full Tray", price: 90 }], category: "Hot Food" },
  { id: "HF_6", name: "Chicken Francese", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_7", name: "Chicken Marsala", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_8", name: "Chicken Parm", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_9", name: "Chicken Rollatini", sizes: [{ name: "Half Tray", price: 75 }, { name: "Full Tray", price: 150 }], category: "Hot Food" },
  { id: "HF_10", name: "Chicken Sorrentino", sizes: [{ name: "Half Tray", price: 95 }, { name: "Full Tray", price: 190 }], category: "Hot Food" },
  { id: "HF_11", name: "Chicken Wings", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_12", name: "Eggplant Parm", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_13", name: "Eggplant Rollatini", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_14", name: "Filet Of Sole Oreganata", sizes: [{ name: "Half Tray", price: 100 }, { name: "Full Tray", price: 175 }], category: "Hot Food" },
  { id: "HF_15", name: "French Fries", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 60 }], category: "Hot Food" },
  { id: "HF_16", name: "Fried Calamari", sizes: [{ name: "Half Tray", price: 75 }, { name: "Full Tray", price: 145 }], category: "Hot Food" },
  { id: "HF_17", name: "Fried Ravioli", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 60 }], category: "Hot Food" },
  { id: "HF_18", name: "Fried Shrimp", sizes: [{ name: "Half Tray", price: 90 }, { name: "Full Tray", price: 160 }], category: "Hot Food" },
  { id: "HF_19", name: "Fried Zucchini", sizes: [{ name: "Half Tray", price: 45 }, { name: "Full Tray", price: 90 }], category: "Hot Food" },
  { id: "HF_20", name: "Greek Pasta", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_21", name: "Grilled Chicken", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_22", name: "Grilled Vegetables", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_23", name: "Linguini with Clams", sizes: [{ name: "Half Tray", price: 95 }, { name: "Full Tray", price: 190 }], category: "Hot Food" },
  { id: "HF_24", name: "Linguini with Oil", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_25", name: "Mac N Cheese", sizes: [{ name: "Half Tray", price: 25 }, { name: "Full Tray", price: 50 }], category: "Hot Food" },
  { id: "HF_26", name: "Manicotti", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_27", name: "Mashed Potatoes", sizes: [{ name: "Half Tray", price: 35 }, { name: "Full Tray", price: 70 }], category: "Hot Food" },
  { id: "HF_28", name: "Meatballs (Sauce)", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_29", name: "Mozzarella Sticks", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_30", name: "Orecchiette with Broccoli Rabe & Sausage", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_31", name: "Penne Broccoli", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_32", name: "Penne Marinara", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_33", name: "Penne Vodka", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_34", name: "Penne with Sundried Tomatoes & Broccoli", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_35", name: "Pernil", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_36", name: "Pigs In A Blanket", sizes: [{ name: "Half Tray", price: 75 }, { name: "Full Tray", price: 145 }], category: "Hot Food" },
  { id: "HF_37", name: "Potato Croquettes", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 60 }], category: "Hot Food" },
  { id: "HF_38", name: "Prosciutto Balls", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 60 }], category: "Hot Food" },
  { id: "HF_39", name: "Ravioli (Sauce)", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_40", name: "Red Roasted Potatoes", sizes: [{ name: "Half Tray", price: 45 }, { name: "Full Tray", price: 90 }], category: "Hot Food" },
  { id: "HF_41", name: "Rice Balls", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 60 }], category: "Hot Food" },
  { id: "HF_42", name: "Roast Pork", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_43", name: "Roasted Potatoes", sizes: [{ name: "Half Tray", price: 45 }, { name: "Full Tray", price: 90 }], category: "Hot Food" },
  { id: "HF_44", name: "Sausage (Hot/Sweet)", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_45", name: "Sausage & Broccoli Rabe", sizes: [{ name: "Half Tray", price: 95 }, { name: "Full Tray", price: 190 }], category: "Hot Food" },
  { id: "HF_46", name: "Sausage & Potatoes", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_47", name: "Sausage & Peppers", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_48", name: "Shrimp Oreganata", sizes: [{ name: "Half Tray", price: 90 }, { name: "Full Tray", price: 145 }], category: "Hot Food" },
  { id: "HF_49", name: "Shrimp Parm", sizes: [{ name: "Half Tray", price: 90 }, { name: "Full Tray", price: 145 }], category: "Hot Food" },
  { id: "HF_50", name: "Sliced Sweet Ham", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_51", name: "Sliced Turkey With Gravy", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_52", name: "Stuffed Mushrooms", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 100 }], category: "Hot Food" },
  { id: "HF_53", name: "Stuffed Shells", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_54", name: "Swedish Meatballs", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" },
  { id: "HF_55", name: "Tortellini Pesto", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_56", name: "Tortellini", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_57", name: "Tri Color Pasta", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }], category: "Hot Food" },
  { id: "HF_58", name: "Veal Francese", sizes: [{ name: "Half Tray", price: 100 }, { name: "Full Tray", price: 180 }], category: "Hot Food" },
  { id: "HF_59", name: "Veal Marsala", sizes: [{ name: "Half Tray", price: 100 }, { name: "Full Tray", price: 180 }], category: "Hot Food" },
  { id: "HF_60", name: "Veal Parm", sizes: [{ name: "Half Tray", price: 100 }, { name: "Full Tray", price: 180 }], category: "Hot Food" },
  { id: "HF_61", name: "Veal Rollatini", sizes: [{ name: "Half Tray", price: 125 }, { name: "Full Tray", price: 200 }], category: "Hot Food" },
  { id: "HF_62", name: "White Rice", sizes: [{ name: "Half Tray", price: 30 }, { name: "Full Tray", price: 45 }], category: "Hot Food" },
  { id: "HF_63", name: "Whole Wheat Penne/Ziti", sizes: [{ name: "Half Tray", price: 65 }, { name: "Full Tray", price: 125 }], category: "Hot Food" }
,
  { id: "PL_1", name: "Wrap Platter", sizes: [{ name: "Small", price: 65 }, { name: "Large", price: 100 }], category: "Platters" },
  { id: "PL_2", name: "Antipasto Platter", sizes: [{ name: "Small", price: 99 }, { name: "Large", price: 175 }], category: "Platters" },
  { id: "PL_3", name: "Mozarella & Tomato Platter", sizes: [{ name: "Small", price: 65 }, { name: "Large", price: 100 }], category: "Platters" },
  { id: "PL_4", name: "Vegetable Dip Platter", sizes: [{ name: "Small", price: 65 }, { name: "Large", price: 100 }], category: "Platters" },
  { id: "PL_5", name: "Fruit Platter", sizes: [{ name: "Small", price: 65 }, { name: "Large", price: 125 }], category: "Platters" },
  { id: "SD_1", name: "Tossed Salad", sizes: [{ name: "Half Tray", price: 25 }, { name: "Full Tray", price: 40 }, { name: "Deep Tray", price: 65 }], category: "Salads" },
  { id: "SD_2", name: "Caesar Salad", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 75 }, { name: "Deep Tray", price: 125 }], category: "Salads" },
  { id: "SD_3", name: "Tri Color Pasta Salad", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 95 }, { name: "Deep Tray", price: 140 }], category: "Salads" },
  { id: "SD_4", name: "Cillingine Salad", sizes: [{ name: "Half Tray", price: 50 }, { name: "Full Tray", price: 75 }, { name: "Deep Tray", price: 125 }], category: "Salads" }];

const categories = ['All', 'Hot Food', 'Party Heroes', "Platters", "Salads"];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [partyFeet, setPartyFeet] = useState(2);
  const [showCart, setShowCart] = useState(false);
  const [manualSubtotal, setManualSubtotal] = useState('');
  const [customTip, setCustomTip] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = items.filter(item =>
    activeCategory === 'All' || item.category === activeCategory
  );

  function openCustomization(item) {
    setSelectedItem(item);
    if (item.category === 'Hot Food') setSelectedSize(item.sizes[0]);
    if (item.category === 'Party Heroes') setPartyFeet(2);
  }

  function saveToCart() {
    let total = 0;
    let description = selectedItem.name;

    if (selectedItem.name === 'Stuffed Mushrooms') {
    total = partyFeet * 12;
    description += ` (${partyFeet} Pound${partyFeet > 1 ? 's' : ''})`;
  } else if (selectedItem.name === 'Baked Clams') {
    total = partyFeet * 20;
    description += ` (${partyFeet} Dozen)`;
  } else if (selectedItem.category === 'Hot Food' && selectedSize) {
      total = selectedSize.price;
      description += ` (${selectedSize.name})`;
    } else if (selectedItem.category === 'Party Heroes') {
    const feet = Math.max(2, partyFeet);
    const hasBoardFee = !selectedItem.name.toLowerCase().includes("pan");
    total = feet * selectedItem.pricePerFoot + (hasBoardFee ? 3 : 0);
    description += hasBoardFee ? ` (${feet}ft + $3 board)` : ` (${feet}ft)`;

    }

    setCart([...cart, { name: description, total, price: total }]);
    setSelectedItem(null);
    setSelectedSize(null);
    setPartyFeet(2);
  }

   function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  const rawSubtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const subtotal = manualSubtotal ? parseFloat(manualSubtotal) || 0 : rawSubtotal;
  const tip = Number(customTip);
  const subtotalWithTip = subtotal + tip;
  const tax = subtotalWithTip * 0.08875;
  const subtotalWithTax = subtotalWithTip + tax;
  const serviceFee = subtotalWithTax * 0.0395;
  

   function clearCart() {
    setManualSubtotal('');
    setCart([]);
    setCustomTip(0);
  }


  function groupCartItems(cart) {
    const grouped = [];
    cart.forEach(item => {
      const matchIndex = grouped.findIndex(g =>
        g.name === item.name &&
        JSON.stringify(g.addons) === JSON.stringify(item.addons)
      );
      if (matchIndex >= 0) {
        grouped[matchIndex].quantity += 1;
        grouped[matchIndex].total += item.total;
      } else {
        grouped.push({ ...item, quantity: 1 });
      }
    });
    return grouped;
  }

  const groupedCart = groupCartItems(cart);

const finalTotal = subtotalWithTax + serviceFee;

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial', background: '#f9f9f9', padding: 20, minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
  <h1 style={{ fontSize: '1.8rem' }}>Catering POS</h1>
  <button onClick={() => setShowCart(true)} style={{ background: '#007AFF', color: '#fff', borderRadius: 20, padding: '6px 12px', border: 'none', fontSize: 14 }}>
    🛒 {cart.length} • ${subtotal.toFixed(2)}
  </button>
</div>
<input type="text" placeholder="Search items..." style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ccc', marginBottom: 16 }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        
{categories.map(cat => {
  const count = cat === 'All'
    ? items.length
    : items.filter(item => item.category === cat).length;
  return (
    <button key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: activeCategory === cat ? '#007AFF' : '#eee' }}>
      {cat} ({count})
    </button>
  );
})}
</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
        {filteredItems.map(item => (
          <div key={item.id} onClick={() => openCustomization(item)} style={{ background: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            <strong>{item.name}</strong><br />
            {item.pricePerFoot ? `$${item.pricePerFoot}/ft` : ''}
            {item.sizes ? ' (Tray Sizes)' : ''}
          </div>
        ))}
      </div>

      {selectedItem && (
  <div onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setSelectedSize(null); } }} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
          <div style={{ background: 'white', padding: 20, borderRadius: 18, width: '90%', maxWidth: 400, maxHeight: '90%', overflowY: 'auto' }}>
            <h2>Customize {selectedItem.name}</h2>

            

{selectedItem.name === 'Stuffed Mushrooms' && (
  <div>
    <label>Pound:</label>
    <select value={partyFeet} onChange={e => setPartyFeet(Number(e.target.value))}>
      {[1,2,3,4,5,6,7,8,9,10].map(num => (
        <option key={num} value={num}>{num === 1 ? 'One' : num === 2 ? 'Two' : num === 3 ? 'Three' : num} Pound{num > 1 ? 's' : ''} - ${num * 12}</option>
      ))}
    </select>
  </div>
)}


{selectedItem.name === 'Baked Clams' && (
  <div>
    <label>Dozen:</label>
    <select value={partyFeet} onChange={e => setPartyFeet(Number(e.target.value))}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
        <option key={num} value={num}>{num} Dozen - ${num * 20}</option>
      ))}
    </select>
  </div>
)}


{(selectedItem.name !== 'Baked Clams' && selectedItem.name !== 'Stuffed Mushrooms' && (selectedItem.category === 'Hot Food' || selectedItem.category === 'Platters' || selectedItem.category === 'Salads')) && (
              <div>
                <label>Tray Size:</label>
                <select value={selectedSize?.name} onChange={e => {
                  const size = selectedItem.sizes.find(s => s.name === e.target.value);
                  setSelectedSize(size);
                }}>
                  {selectedItem.sizes.map((s, i) => (
                    <option key={i} value={s.name}>{s.name} - ${s.price}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedItem.category === 'Party Heroes' && (
              <div>
                <label>Feet (min 2): </label>
                <select value={partyFeet} onChange={e => setPartyFeet(Number(e.target.value))}>
      <option value={2}>2ft - ${2 * selectedItem.pricePerFoot + 3}</option>
      <option value={3}>3ft - ${3 * selectedItem.pricePerFoot + 3}</option>
    </select>
              </div>
            )}

            <div style={{ marginTop: 16 }}>
              <button onClick={saveToCart} style={{ marginRight: 10, background: '#007AFF', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 12px' }}>Add to Cart</button>
              <button onClick={() => setSelectedItem(null)} style={{ borderRadius: 8, padding: '6px 12px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

     {/* Cart Modal */}
      {showCart && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={(e) => { if (e.target === e.currentTarget) { setShowCart(false); setManualSubtotal(''); } }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto' }}>
            {groupedCart.map((item, idx) => (
              <div key={idx} style={{ background: '#f2f2f2', padding: 12, borderRadius: 10, marginBottom: 10 }}>
                <div>
                  <strong>{item.name}</strong>{item.quantity > 1 ? ` × ${item.quantity}` : ''} - ${(item.price * item.quantity).toFixed(2)}
{
  item.category?.includes('Hero') && (() => {
    const matchingCartItem = cart.find(
      cartItem => cartItem.name === item.name && JSON.stringify(cartItem.addons) === JSON.stringify(item.addons)
    );
    return matchingCartItem ? (
      <div style={{ marginTop: 8 }}>
        <label style={{ fontSize: 14 }}>
          Manual Price: $
          <input
            type="number"
            value={matchingCartItem.manualPrice ?? ''}
            onChange={(e) => {
              const updatedCart = cart.map(cartItem => {
                if (
                  cartItem.name === item.name &&
                  JSON.stringify(cartItem.addons) === JSON.stringify(item.addons)
                ) {
                  const manualPrice = parseFloat(e.target.value) || 0;
                  return {
                    ...cartItem,
                    manualPrice,
                    total:
                      manualPrice +
                      cartItem.addons.reduce(
                        (sum, a) => sum + a.price * a.qty,
                        0
                      )
                  };
                }
                return cartItem;
              });
              setCart(updatedCart);
            }}
            style={{
              marginLeft: 8,
              width: 80,
              padding: 4,
              borderRadius: 6,
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
        </label>
      </div>
    ) : null;
  })()
}

                {item.category?.includes('Hero') && (
                  <div style={{ marginTop: 8 }}>
                    <label style={{ fontSize: 14 }}>
                      Manual Price: $
                      <input
                        type="number"
                        value={item.manualPrice ?? ''}
                        onChange={(e) => {
                          const updatedCart = [...cart];
                          updatedCart[item.indexes[0]] = {
                            ...updatedCart[item.indexes[0]],
                            manualPrice: parseFloat(e.target.value) || 0,
                            total:
                              (parseFloat(e.target.value) || 0) +
                              updatedCart[item.indexes[0]].addons.reduce(
                                (sum, a) => sum + a.price * a.qty,
                                0
                              ),
                          };
                          setCart(updatedCart);
                        }}
                        style={{
                          marginLeft: 8,
                          width: 80,
                          padding: 4,
                          borderRadius: 6,
                          border: '1px solid #ccc',
                          fontSize: '14px',
                        }}
                      />
                    </label>
                  </div>
                )}

                  <button onClick={() => openCustomization(item, idx)} style={{ marginLeft: 10 }}>Edit</button>
                  <button onClick={() => removeFromCart(idx)} style={{ marginLeft: 10, color: 'red' }}>Remove</button>
                </div>
                <ul>
                  {item.addons && item.addons.map((addon, i) => (
                    <li key={i}>
                      {addon.qty}× {addon.name} (${(addon.price * addon.qty).toFixed(2)})
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              
              
              
              <label style={{ display: 'block', marginBottom: 8 }}>
                Manual Subtotal: $
                <input
                  type="number"
                  value={manualSubtotal}
                  onChange={(e) => setManualSubtotal(e.target.value)}
                  placeholder={rawSubtotal.toFixed(2)}
                  style={{ marginLeft: 8, width: 100, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '16px' }}
                />
                <button onClick={() => {
                  const base = parseFloat(manualSubtotal || rawSubtotal.toFixed(2));
                  setManualSubtotal((base - 0.50).toFixed(2));
                }} style={{ marginLeft: 8, padding: '2px 8px' }}>−</button>
                <button onClick={() => {
                  const base = parseFloat(manualSubtotal || rawSubtotal.toFixed(2));
                  setManualSubtotal((base + 0.50).toFixed(2));
                }} style={{ marginLeft: 4, padding: '2px 8px' }}>+</button>
              </label>



              <label style={{ display: 'block', marginBottom: 8 }}>
                Tip: $
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  style={{ marginLeft: 8, width: 80, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '16px' }}
                />
              </label>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tip: ${tip.toFixed(2)}</p>
              <p>Subtotal with Tip: ${subtotalWithTip.toFixed(2)}</p>
              <p>Sales Tax (8.875%): ${tax.toFixed(2)}</p>
              <p>Subtotal with Tax: ${subtotalWithTax.toFixed(2)}</p>
              <p>Service Fee (3.95%): ${serviceFee.toFixed(2)}</p>
              <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
            </div>

            <div style={{ marginTop: 16, textAlign: 'right' }}>
              
              <button onClick={clearCart} style={{ padding: '8px 16px', marginRight: 10, borderRadius: 8, background: '#FF3B30', color: '#fff', border: 'none' }}>
                Clear Cart
              </button>

<button onClick={() => { setShowCart(false); setManualSubtotal(''); }} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #ccc', background: '#f2f2f2' }}>Close Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;