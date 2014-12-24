#You will need to install xlsx2csv from https://github.com/dilshod/xlsx2csv
for i in *.xlsx;
 do
  filename=$(basename "$i" .xlsx);
  outext=".tsv" 
  xlsx2csv -d tab $i $filename$outext
done