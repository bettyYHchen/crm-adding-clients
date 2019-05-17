package com.busyqa.crm.utils;

public class TestMyThought {

    public static void main(String[] args) {
        Child c = new Child(1,"hello");
        Parent p = c;
        System.out.println((p));
    }

}

