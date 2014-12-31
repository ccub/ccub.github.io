#You will need to install xlsx2csv from https://github.com/dilshod/xlsx2csv
for i in *.xlsx;
 do
  filename=$(basename "$i" .xlsx);
  outext=".tsv" 
  xlsx2csv -i -d tab $i $filename$outext
  perl -pi -e 's/.0\t/\t/g' $filename$outext
  perl -pi -e 's/.0\n/\n/g' $filename$outext
  perl -pi -e 's/\n\n/\n/g' $filename$outext
  perl -pi -e 'chomp if eof' $filename$outext
  #sed -i '' '$s/..$//' $filename$outext
done