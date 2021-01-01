# Hashdog
A straightforward hash cracking tool inspired by Hashcat.

**Please do not use this program to do anything illigal. I will not be held responsible. This is purly for educational purposes only.**

 **HOW TO USE:**\
 Run the "hashdog.bat" file\
 To run you will need to install (node)[https://nodejs.org/en/]
 
 **Exaple inputs:**
 
 **HASH:** 909104cdb5b06af2606ed4a197b07d09d5ef9a4aad97780c2fe48053bce2be52 (This is the hash that you want to crack)
 
 **HASH METHOD:** sha256 (This is the hashing argorithim used to generate the hash)
 
 **LENGTH:** 4 (This is the length of the un-hashed password)
 
 **ADD CHARACTERS:** 1 2 3 (This is where you list possible characters for the password - defaults to lowercase alphabet - separate with spaces)
 
 **MEMORY:** 16000 (This is where you cap the memory usage - program will crash if memory cap is reached - record in megabytes)
 
 **PRINT:** n (This tells the program whether or not to print tried passwords - makes cracking take significantly longer)
