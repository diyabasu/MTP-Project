for i in {1..10}; do sed "s/mypodIII/podIII-$i/g" mypod3.yaml | kubectl apply -f - ; done
