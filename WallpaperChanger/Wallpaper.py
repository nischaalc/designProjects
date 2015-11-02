__author__ = 'nischaalc'

import requests
from bs4 import BeautifulSoup
import random
import ctypes
import os
import shutil

main_url = 'https://unsplash.com/'
number = random.randint(1, 10)

response = requests.get(main_url)
soup = BeautifulSoup(response.text, 'html.parser')
all_links = soup.find_all('div', {'class' : 'photo'})

valid_links = []

for link in all_links :
    valid_links.append(str(link))

chosen_link = valid_links[number]
soup_link = BeautifulSoup(chosen_link, 'html.parser')
image_link = soup_link.find('a')
image_link = image_link['href']
download_link = 'https://unsplash.com/{0}/download'.format(image_link)

img = requests.get(download_link, stream = True)
with open('C:\\Users\\ncooray\\Desktop\\img.png', 'wb') as out_file :
    shutil.copyfileobj(img.raw, out_file)
del img

image_path = 'C:\\Users\\ncooray\\Desktop\\img.png'
SPI_SETDESKWALLPAPER = 20
ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, image_path, 3)

os.remove(image_path)
