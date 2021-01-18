const fs = require('fs');

let races = [];

let spreadsheet_csv = fs.readFileSync('../data/clean/data.csv', 'utf8');

let lines = spreadsheet_csv.split("\n");
//console.log(lines);



for (let i = 5-1; i <= 15-1; i++) {//loops through race
  if (i != 6-1) {
    let allFields = []; // [ [field1, years], [field2, years], ... ]

    let initialLine = lines[i];
    let initialInfo = initialLine.split(',');
    let race = {};
    race['name'] = initialInfo[0];
    if (i == 4) {
      race['description'] = "Hispanic and Latino (12.4% of 2016 graduates) is the largest POC demographic group in the US, gapping the second largest (Asian, 8.4% of 2016 graduates) by a considerable margin . This is likely due to how the “Hispanic and Latino” option tends to blanket enormous amounts of otherwise diverse populations, essentially limiting the dozens of cultures in Europe and South America to one identity. Appropriately, the sample size for 2016 graduates was enormous, where the most common degree was psychology (20,231 recipients). Psychology majors accounted for 20.6% of all science and engineering majors earned by “Hispanic and Latino” identifying graduates, where political science is at a close second (15.4%). Both of these degree types saw a steady rise in Hispanic and Latino recipients across the previous 10 years. The graph seems to show the growth as exponential. There has been a slight decrease in psychology majors in the past 2 years however.";
    }
    if (i == 6) {
      race['description'] = "American Indians and Alaska Native make up the second smallest demographic of science and engineering majors, with their yearly graduate numbers being in the sub 10,000 range. They make up 0.4% of the total 2016 science and engineering graduates. Aside from various other smaller degrees, computer science (9.3%), biological science (19.3%), and political science (13.1%) degrees account for ⅓ of all science and engineering degrees earned in 2016 by AI/AN identifying graduates. While there is some fluctuation across the previous 10 years, psychology and biological sciences have remained consistent in the numbers of degrees earned, while political science and public administration saw some decline. Even though the number of graduates regardless of degree have consistently been under 1000, advancements made towards the inclusion and preservation of AI/AN heritage has also opened new access to education. These 2016 numbers are likely higher now.";
    }
    if (i == 7) {
      race['description'] = "Despite including a wide range of ethnicities from all over Asia, the Asian demographic only accounted for 8.4% of all science and engineering degrees earned in 2016, which is quite surprising. It is far too common to hear tropes of the superior feats of Asians in medical and engineering fields, and there is quite a strong stereotype backing this. The three largest categories for Asian identifying science and engineering majors in 2016 were psychology (16.5%), economics(10.9%) and computer science (11.2%). In the chart, computer science seems to be increasing at a rapid pace, already overtaking psychology by 2016. If the trend were to continue, then computer science majors who identify as Asian should be in the low 7000’s by 2020.";
    }
    if (i == 8) {
      race['description'] = "Asian and Pacific Islander is an interesting demographic, as it addresses mostly the Flipino Islands and other Pacific Islands nearby, like Singapore. Samoa is also oddly included in this group. They account for 7.4% of total science and engineering graduates in 2016.  Their data set is actually incomplete as records were lost of graduates from 2010 onwards. The pie chart of 2016 actually shows the same values from 2010 forward due to plateau values. Psychology was the most common degree, being responsible for 16.4% of all degrees earned by Asian and Pacific Islander identifying graduates in 2010. The chart does show that this percentage increases, but it is difficult to assume now due to how incomplete the set is.";
    }
    if (i == 9) {
      race['description'] = "Black or African American science and engineering majors make up 8.4% of the total number of graduates in 2016, similar to Asians. There three most common degrees earned in 2016 were biological science (20.5%), sociology (15.1), and political science (17.3%). They also have the single highest percentage of graduates in one field of any race with their biological science majors, which have shown a gradual rise in the number of graduates. Other fields have interestingly flat plateaus, showing little change.";
    }
    if (i == 10) {
      race['description'] = "Without contest, Native Hawaiian or Other Pacific Islander are the absolute smallest demographic of science and engineering majors in 2016, making up only 0.2% of the total. They only yield roughly 1000 graduates a year. Interestingly, their ratios are still incredibly similar to other races, where political science (14.9%), psychology (21.5%), and computer science (12.1%) are the three most common degrees earned in 2016. The percentages are also very similar as well. Notably, the number of computer science majors who identify as Native Hawaiian or Other Pacific Islander is increasing as well, showing considerable growth from 2011 to 2016 while the other three decline. In update data sets, it would not be a surprise if computer science majors were the majority of Native Hawaiian or Other Pacific Islander graduates.";
    }
    if (i == 11) {
      race['description'] = "Unsurprisingly, “White” identifying students are the most common graduates of science and engineering majors, accounting for half (51.4%) of all graduates in 2016. While there numbers are incredibly large, with the most earned degree of biological science(20.1%)  having 64000+ graduates, their ratios have been mostly consistent with other races. Since they have a much larger sample size, it is actually harder to see inconsistencies in the line chart due to how miniscule the changes can be. Biological science still seems to be on a rise, however.";
    }
    if (i == 12) {
      race['description'] = "More than one race is a difficult category. Aside from being a blanket category for what should be a double/triple race option, it also negates patterns formed from tropes and stereotypes of races. Students of more than one race account for less 10% of all science and engineering majors in 2016, but still boast an incredible 34000 graduates a year (assuming totals are consistent from 2016). Like many of the other demographics, biological sciences (21.7%) and political sciences (12.7%) account for almost a third of all types of degrees received in 2016. The line chart also shows a huge spike in the number of degrees earned in these two specific fields from 2011. If the trend continues, the number of biological science and psychology majors who identify as more than one race should be approaching 7,000 in 2021.";
    }
    if (i == 13) {
      race['description'] = "Other accounts for any race that does not fall under the 7 larger categories, which means it is subject to incredible diversity. Degree patterns across ethnicity groups are irrelevant here due to the ambiguity of what patterns are even applicable. It’s not possible to go around assuming race from a bubbled in option. Biological science (17.7%), political science (16.2%), and computer science (15.5%) are the three most common degrees earned by “Other” identifying graduates in 2016, which is fairly similar to the other 7 larger race demographics. Interestingly, the number of degrees earned by “Other” identifying graduates has been consistently declining across the last 6 years in the chart. This is likely because there are more demographic options available on newer surveys, eliminating the need for the “other” bubble. If inclusivity is the goal, then hopefully these numbers fall to 0 in the updated versions of this data set, implying full representation of all races.";
    }
    if (i == 14) {
      race['description'] = "The “Temporary resident” marker  addresses the demographic of immigrants within only the borders of the continental US. This includes both immigrants who have settled here and those on student and work visas as well. The chart to the left shows the types of science and engineering degrees earned during 2016 by temporary residents. At first glance, it may seem that the types of degrees earned are fairly evenly distributed, where the largest gap is between psychology (9.7%) and computer sciences (12.5%) in the top 5 of degrees earned. But a look at the line chart below shows a drastic and steady increase in economics degrees earned among temporary residents since 2010. Considering the data set ends in 2016 and assuming the rise is consistent, it is likely that the number of economic degrees earned has increased even further since, probably approaching 25-30% of total degrees earned.";
    }


    for (let j = i+13; j <= 458 && j != 327; j += 13) {//loops through fields; exclude non-S&E



      let fieldArray = [];

      let raceLine = lines[j];
      let raceInfo = raceLine.split(',');
      let fieldLine = lines[j - i + 2];
      let fieldInfo = fieldLine.split(',');
      let fieldName = fieldInfo[0];

      if (fieldName != "Other" && fieldName != "Other " && fieldName != "") {
        let yearArray = [];
        let sumYears = 0;
        for (let k = 1; k <= 11; k++) {
          sumYears += 1*raceInfo[k];
          yearArray.push(1*raceInfo[k]);
        }
        let averageYears = Math.round((sumYears)/11);
        yearArray.push(averageYears);

        fieldArray.push(fieldName);
        fieldArray.push(yearArray);
        allFields.push(fieldArray);
      }//if fieldName != 'Other'
    }// j loop

    allFields.sort(function(arr1, arr2) {
      return (arr2[1][11] - arr1[1][11]);
    });

    for (let j = 0; j < allFields.length; j++) {
      let specificField = allFields[j];
      race[specificField[0]] = specificField[1];
    }

    races.push(race);
  }// if statement
}// i loop


let allRaces = {};
allRaces['name'] = 'allRaces';


let allFields = [];
for (let i = 41; i <= 458; i+= 13) {
  let line = lines[i];
  let info = line.split(',');
  let fieldArray = [];
  let field = info[0];
  let num = info[11];
  if (field != "Non-S-and-E" && field != "name" && field != "description" && field != "Social sciences" && field != "Science" && field != "Engineering") {
    fieldArray.push(field);
    fieldArray.push(num);
    allFields.push(fieldArray);
  }
}

allFields.sort(function(arr1, arr2) {
  return (arr2[1] - arr1[1]);
});

for (let i = 0; i < allFields.length; i++) {
  let specificField = allFields[i];
  allRaces[specificField[0]] = specificField[1];
}

races.push(allRaces);




fs.writeFileSync('../data/clean/data.json', JSON.stringify(races), 'utf8');
